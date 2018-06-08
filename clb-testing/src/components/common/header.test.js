import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';

describe('Header Tests', () => {
  
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  test('Header should have title', () => {
    const wrapper = shallow(<Header />);
    //console.log(wrapper.debug());
    const titleText = wrapper.find('div').childAt(0).text()
    expect(titleText).toBe('Build modern apps with React');
  })

})

