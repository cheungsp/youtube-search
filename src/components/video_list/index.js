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

  return (
    <ul className="col-md-4">
      {Videos}
    </ul>
  );
};

export default VideoList;
