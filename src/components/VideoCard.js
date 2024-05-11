import React from 'react';

function VideoCard({ videoDetails }) {
  return (
    <div className="p-2">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={videoDetails.title}
          src={`https://www.youtube.com/embed/${videoDetails.id}`}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p>{videoDetails.title}</p>
    </div>
  );
}

export default VideoCard;
