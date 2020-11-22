import React from 'react';
import { shallow } from 'enzyme';

import BookListView from './BookListView';

jest.mock('../../operations/queries/getBookList', () => ({
    useGetBookList: () => ({
        loading: false,
        error: null,
        data: {}
    })
}));
jest.mock('./useListViewHeight', () => ({
    __esModule: true,
    default: () => 0,
}));

describe('BookListView', () => {
    it('should test that component is rendered and not changed unintentionally', () => {
        const wrapper = shallow(
            <BookListView />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
