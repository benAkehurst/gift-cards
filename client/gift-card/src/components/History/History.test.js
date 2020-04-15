import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import History from './History';

describe('<Stamp />', () => {
  it('should render the compoent', () => {
    const wrapper = shallow(<History />);
    expect(wrapper).toBeTruthy();
  });

  it('should render a list of items', () => {
    const wrapper = shallow(
      <History
        historyData={[
          { id: 1, name: 'a' },
          { id: 2, name: 'b' },
        ]}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  it('should render a title', () => {
    const wrapper = shallow(<History title={'test title'} />);
    expect(wrapper).toBeTruthy();
  });
});
