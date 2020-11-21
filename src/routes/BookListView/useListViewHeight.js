import { useEffect, useState } from 'react';

import { debounce } from '../../utils/execution.utils';

const useListViewHeight = (headerRef) => {
    const [listViewHeight, setListViewHeight] = useState(0);

    const onWindowResize = debounce(() => {
        const headerHeight = headerRef?.current?.getBoundingClientRect?.().height || 0;
        const listViewHeight = window.innerHeight - headerHeight;
        setListViewHeight(listViewHeight);
    }, 100);

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);
        onWindowResize();

        () => window.removeEventListener('resize', onWindowResize)
    }, []);

    return listViewHeight;
};

export default useListViewHeight;
