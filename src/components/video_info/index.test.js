import React from 'react';
import { shallow } from 'enzyme'
import VideoInfo from './index.js'
import toJson from 'enzyme-to-json'
import './style.css';


test('VideoInfo component should render as expected', () => {
  const video = {
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
    'id': {
      'kind': "youtube#video",
      'videoId': "YQHsXMglC9A"}
  }
  const component = shallow(<VideoInfo video={video}/>)
  const tree =  toJson(component)
  expect(tree).toMatchSnapshot()
})


test('VideoInfo component should render loading... when not passed in any video', () => {
  const component = shallow(<VideoInfo />)
  const tree =  toJson(component)
  expect(component.node.props.children).toBe('Loading...')
})




