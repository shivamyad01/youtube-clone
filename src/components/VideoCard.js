import React from 'react';

function VideoCard({ videoDetails }) {
  return (
    <div className="flex flex-wrap">
      {videoDetails.map((video, index) => (
        <div key={index} className="w-1/4 p-2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoCard;
