import React from 'react';
import { shallow } from 'enzyme';

import EditView from './EditView';

jest.mock('./operations/mutations/editBook', () => ({
    useEditBook: () => ({
        loading: false,
        error: null,
        book: {},
        handleFinish: jest.fn(),
        handleCancel: jest.fn()
    })
}));

describe('EditView', () => {
    it('should test that component is rendered and not changed unintentionally', () => {
        const wrapper = shallow(
            <EditView />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
