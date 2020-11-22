import React from 'react';
import { mount } from 'enzyme';

import BookList from './BookList';

import { useSelectedBookIds } from '../../operations/mutations/selectedBooks';

jest.mock('../../operations/mutations/selectedBooks', () => ({
    useSelectedBookIds: jest.fn()
}));

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockHistoryPush,
    })
}));

describe('BookList', () => {
    describe('Empty Table', () => {
        it('should render an empty table', () => {
            useSelectedBookIds.mockImplementation(() => ({
                selectedBookIds: [],
                setSelectedBookIds: jest.fn()
            }));
            const wrapper = mount(
                <BookList
                    books={[]}
                    listViewHeight={100}
                    loading={false}
                />
            );

            const emptyIndicator = wrapper.find('.ant-empty');
            expect(emptyIndicator.exists()).toBeTruthy();
        });
    });

    describe('Populated Table', () => {
        let wrapper;
        let setSelectedBookIds = jest.fn();

        beforeEach(() => {
            useSelectedBookIds.mockImplementation(() => ({
                selectedBookIds: [],
                setSelectedBookIds
            }));
            const books = [{
                id: 1,
                author: 'Author 1',
                title: 'Title 1',
                price: 10
            }, {
                id: 2,
                author: 'Author 2',
                title: 'Title 2',
                price: 20
            }]
            wrapper = mount(
                <BookList
                    books={books}
                    listViewHeight={100}
                    loading={false}
                />
            );
        });

        it('should render a table with 2 rows', () => {
            const expected = [
                '1', 'Title 1', 'Author 1', '10',
                '2', 'Title 2', 'Author 2', '20'
            ];

            const cells = wrapper.find('BodyRow Cell td');
            const values = cells
                .map(cell => cell.text())
                .filter(text => text !== '' && text !== 'Edit');

            expect(values).toEqual(expected);
        });

        it('should tick the first row\'s Checkbox button which should fire an update event', () => {
            wrapper.find('Checkbox input').at(1).simulate('change');

            expect(setSelectedBookIds).toHaveBeenCalledWith([1], expect.anything());
        });

        it('should click the first row\'s Edit button which triggers a history push event', () => {
            wrapper.find('button').first().simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith({
                pathname: '/edit',
                state: { bookId: 1 }
            });
        });
    });
});
