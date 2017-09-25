import React from 'react';
import VideoListItem from '../video_list_item/index';
import './style.css';

const VideoList = (props) => {
  const Videos = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  const videos = Videos.slice(0,4);

  return (
    <ul className="col-md-4 video-list">
      {videos}
    </ul>
  );
};

export default VideoList;
