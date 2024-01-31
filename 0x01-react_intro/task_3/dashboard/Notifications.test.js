// src/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('ul li');
    expect(listItems).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();
    expect(text).toBe('Here is the list of notifications');
  });
});
