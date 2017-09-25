import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './index.js'
import YTSearch from 'youtube-api-search';
import VideoList from '../video_list/index';
import VideoInfo from '../video_info/index';
import VideoListItem from '../video_list_item/index';
import SearchBar from '../search_bar/index';
import toJson from 'enzyme-to-json'
import './style.css';


test('App component should render as expected', () => {
  const component = shallow(<App />)
  const tree =  toJson(component)
  expect(tree).toMatchSnapshot()
})

describe('<App />', () => {
  describe('it renders app with correct state', () => {
    const component = mount(<App />);
    console.log(component)
    expect(component.node.state.videos.length).toBe(0)
    expect(component.node.state.selectedVideos).toBe(undefined)
  })
})

