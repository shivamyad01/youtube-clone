


import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDkGKmCcK_3zLbZkfZn4REDQpldpMVLLpM&part=snippet&chart=mostPopular&maxResults=50&regionCode=IN');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const fetchedVideos = data.items.map(item => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url
        }));
        
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>


      <VideoCard videoDetails={videos}/>
    </div>
  );
};

export default VideoContainer;
