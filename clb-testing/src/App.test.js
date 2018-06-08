import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';

describe('App Tests', () => {
  
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('One more app test case', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.find('Header').debug());
    const headerText = wrapper.find('div').childAt(1).text();
    expect(headerText).toBe('<Header />');
  })
})

