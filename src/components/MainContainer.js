import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const videoIds = ['ndrb5t_ckq8', 'MHX6M19J1uM', 'jCk3m4RA9ns', 'Q3mlNjnRO8w', 'c2ZxGg2syGU', 'VIDEO_ID_3', 'VIDEO_ID_3', 'VIDEO_ID_3', 'VIDEO_ID_3', 'ndrb5t_ckq8', 'MHX6M19J1uM', 'jCk3m4RA9ns', 'Q3mlNjnRO8w', 'c2ZxGg2syGU', 'VIDEO_ID_3', 'ndrb5t_ckq8', 'MHX6M19J1uM', 'jCk3m4RA9ns', 'Q3mlNjnRO8w', 'c2ZxGg2syGU', 'VIDEO_ID_3',]; // Replace VIDEO_ID_X with actual video IDs
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
