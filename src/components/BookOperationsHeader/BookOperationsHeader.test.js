import React from 'react';
import { shallow } from 'enzyme';

import BookOperationsHeader from './BookOperationsHeader';

describe('BookOperationsHeader', () => {
    it('should test that component is rendered and not changed unintentionally', () => {
        const wrapper = shallow(
            <BookOperationsHeader
                titleFragment="Test"
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
