import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Stamp from './Stamp';

describe('<Stamp />', () => {
  it('should render the compoent', () => {
    const wrapper = shallow(<Stamp />);
    expect(wrapper).toBeTruthy();
  });

  it('should render a stamp if it exists', () => {
    const wrapper = shallow(<Stamp hasStamp={true} />);
    expect(wrapper).toBeTruthy();
  });
});
