import React from 'react';
import { shallow } from 'enzyme';

import RouteInvalidView from './RouteInvalidView';

describe('RouteInvalidView', () => {
    it('should test that component is rendered and not changed unintentionally', () => {
        const wrapper = shallow(
            <RouteInvalidView/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
