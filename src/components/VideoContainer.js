


import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
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
        console.log(data);
        const fetchedVideos = data.items.map(item => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url
        }));
        console.log(fetchedVideos.id);
        
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className='w-1/4 p-2'>
          <VideoCard videoDetails={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
