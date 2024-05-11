import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
 

    return (
        <div className='w-3/4 h-screen flex flex-col mt-16'>
            <ButtonList />
            <div className='flex-1 overflow-y-auto'>
                <VideoContainer  />
            </div>
        </div>
    );
};

export default MainContainer;
