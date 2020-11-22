import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

import { useSelectedBookInfo } from '../../operations/mutations/selectedBooks';

jest.mock('../../operations/mutations/selectedBooks', () => ({
    useSelectedBookInfo: jest.fn()
}));

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockHistoryPush,
    })
}));

describe('Header', () => {
    describe('Always visible components ', () => {
        let wrapper;

        beforeEach(() => {
            useSelectedBookInfo.mockImplementation(() => ({
                bookCount: 0,
                sumPrice: 0
            }));
            wrapper = mount(
                <Header />
            );
        });

        it('Title should be "Books"', () => {
            expect(wrapper.find('.page-header__title').text()).toBe('Books');
        });

        it('Click on the button should trigger a history push event', () => {
            wrapper.find('button.page-header__nav-button').simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith('/create');
        });
    });

    describe('Without Books Info', () => {
        useSelectedBookInfo.mockImplementation(() => ({
            bookCount: 0,
            sumPrice: 0
        }));
        it('Book info texts should not be mounted', () => {
            const wrapper = mount(
                <Header />
            );

            expect(wrapper.find('.page-header__stat').exists()).toBeFalsy();
            expect(wrapper.find('.page-header__price').exists()).toBeFalsy();
        })
    });

    describe('With Books Info', () => {
        it('Book info texts should not be mounted', () => {
            useSelectedBookInfo.mockImplementation(() => ({
                bookCount: 2,
                sumPrice: 21.33
            }));
            const wrapper = mount(
                <Header />
            );

            expect(wrapper.find('.page-header__stat .ant-statistic-content-value-int').text()).toBe('2');
            expect(wrapper.find('.page-header__price .ant-statistic-content-value-int').text()).toBe('21');
            expect(wrapper.find('.page-header__price .ant-statistic-content-value-decimal').text()).toBe('.33');
        })
    });
});
