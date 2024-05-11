import React from 'react';

const VideoContainer = ({ videoIds }) => {
    
  return (
    <div className="flex flex-wrap">
      {videoIds.map((videoId, index) => (
        <div key={index} className="w-1/4 p-2">
          <div className="aspect-w-16 aspect-h-9  ">
            <iframe
              title={`YouTube Video ${index + 1}`}
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
