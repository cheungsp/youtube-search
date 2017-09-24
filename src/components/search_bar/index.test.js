import React from 'react';
import { shallow } from 'enzyme'
import SearchBar from './index.js'
import toJson from 'enzyme-to-json'
import './style.css';


test('Search component should render as expected', () => {
  const component = shallow(<SearchBar />)
  const tree =  toJson(component)
  expect(tree).toMatchSnapshot()
})