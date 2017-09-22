import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from '../video_list/index';
import MainVideo from '../main_video/index';
import VideoListItem from '../video_list_item/index';
import SearchBar from '../search_bar/index';
import './style.css';

// import SearchBar from 'components/search_bar';

const API_KEY = 'AIzaSyDxbHb80neIjBfNSVj0nl4mXXPlzzclMRk';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <MainVideo />
        <VideoListItem />
      </div>
    );
  }
}

export default App;
