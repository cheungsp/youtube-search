import React from 'react';
import { shallow } from 'enzyme'
import VideoList from './index.js'
import VideoListItem from '../video_list_item/index'
import toJson from 'enzyme-to-json'
import './style.css';


test('VideoList component should render as expected', () => {
  const component = shallow(<VideoList videos={[]}/>)
  const tree =  toJson(component)
  expect(component.find(VideoListItem).length).toBe(0);
  expect(tree).toMatchSnapshot()
})

test('VideoList component should render as expected', () => {
  const component = shallow(<VideoList videos={[
    {
      'title': 'video 1',
      'key': 1,
      'id': 1
    },
    {
      'title': 'video 2',
      'key': 2,
      'id': 2
    }
  ]}/>)
  const tree =  toJson(component)
  expect(component.find(VideoListItem).length).toBe(2);
  expect(tree).toMatchSnapshot()
})
