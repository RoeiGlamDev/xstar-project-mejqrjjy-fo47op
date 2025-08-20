import React from 'react';

interface VideoType {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface VideoProps {
  video: VideoType;
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div style={{ backgroundColor: 'white', color: 'orange' }}>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;