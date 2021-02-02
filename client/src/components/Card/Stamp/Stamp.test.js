import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Stamp from './Stamp';

describe('<Stamp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Stamp />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a stamp if it exists', () => {
    wrapper.setProps({ hasStamp: true });
    expect(wrapper).toBeTruthy();
  });
});
