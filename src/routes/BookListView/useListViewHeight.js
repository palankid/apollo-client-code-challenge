import { useEffect, useState } from 'react';

import { debounce } from '../../utils/execution.utils';

const useListViewHeight = (headerRef) => {
    const [listViewHeight, setListViewHeight] = useState(0);

    const onWindowResize = debounce(() => {
        const listViewHeight = window.innerHeight - headerRef.current.getBoundingClientRect().height;
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
