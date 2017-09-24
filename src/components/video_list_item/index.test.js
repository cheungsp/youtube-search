import React from 'react';
import { shallow } from 'enzyme'
import VideoList from '../video_list/index.js'
import VideoListItem from './index.js'
import toJson from 'enzyme-to-json'
import './style.css';


test('VideoListItem component should render as expected given a video', () => {
  const video = {
    'kind': "youtube#searchResult",
    'etag': "VPWTmrH7dFmi4s1RqrK4tLejnRI/j0uEstXCXOhrDqDegEBmEeHqsBM",
    'snippet': {
      'thumbnails': {
        'default': {
          'url':"https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg"
        }
      }
    },
    'title': 'video 1',
    'key': 1,
    'id': 1,
  }
  const component = shallow(<VideoListItem video={video}/>)  
  const tree =  toJson(component)
  expect(component.find(VideoListItem).length).toBe(0);
  expect(tree).toMatchSnapshot()
})

 