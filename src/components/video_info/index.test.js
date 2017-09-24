import React from 'react';
import { shallow } from 'enzyme'
import VideoInfo from './index.js'
import toJson from 'enzyme-to-json'
import './style.css';


test('VideoInfo component should render as expected', () => {
  const component = shallow(<VideoInfo />)
  const tree =  toJson(component)
  expect(tree).toMatchSnapshot()
})