import React, { useState, useEffect } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const [videoIds, setVideoIds] = useState([]);

    useEffect(() => {
        const fetchVideoIds = async () => {
            try {
                const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDkGKmCcK_3zLbZkfZn4REDQpldpMVLLpM&part=snippet&chart=mostPopular&maxResults=20');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                const fetchedVideoIds = data.items.map(item => item.id);
                setVideoIds(fetchedVideoIds);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchVideoIds();
    }, []);

    return (
        <div className='w-3/4 h-screen flex flex-col mt-16'>
            <ButtonList />
            <div className='flex-1 overflow-y-auto'>
                <VideoContainer videoIds={videoIds} />
            </div>
        </div>
    );
};

export default MainContainer;
