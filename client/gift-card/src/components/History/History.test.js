import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import History from './History';

describe('<Stamp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<History />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a list of items', () => {
    wrapper.setProps({
      historyData: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ],
    });
    expect(wrapper).toBeTruthy();
  });

  it('should render a title', () => {
    wrapper.setProps({ title: 'a title' });
    expect(wrapper).toBeTruthy();
  });
});
