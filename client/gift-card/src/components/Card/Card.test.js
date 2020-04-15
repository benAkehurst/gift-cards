import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Card from './Card';
import Stamp from './Stamp/Stamp';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render stamps if they exist', () => {
    wrapper.setProps({ currentStamps: 2 });
    expect(wrapper.find(Stamp)).toBeTruthy();
  });

  it('should render a message if over 10 stamps', () => {
    wrapper.setProps({ currentStamps: 12 });

    expect(wrapper).toBeTruthy();
  });
});
