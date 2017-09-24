import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoList from '../video_list/index';
import VideoInfo from '../video_info/index';
import VideoListItem from '../video_list_item/index';
import SearchBar from '../search_bar/index';
import './style.css';

const API_KEY = 'AIzaSyDxbHb80neIjBfNSVj0nl4mXXPlzzclMRk';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoInfo video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
