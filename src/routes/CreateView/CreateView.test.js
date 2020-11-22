import React from 'react';
import { shallow } from 'enzyme';

import CreateView from './CreateView';

jest.mock('./operations/mutations/createBook', () => ({
    useCreateBook: () => ({
        loading: false,
        error: null,
        handleFinish: jest.fn(),
        handleCancel: jest.fn()
    })
}));

describe('CreateView', () => {
    it('should test that component is rendered and not changed unintentionally', () => {
        const wrapper = shallow(
            <CreateView />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
