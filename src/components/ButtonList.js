import React from 'react';

const ButtonList = () => {
  // Example button list data
  const buttons = ['All', 'News', 'Tv', 'Serial', 'Music', 'Apple', 'Javascript', 'Gaming' , 'Cricket', 'Ipl', 'Mix', 'Apple', 'Javascript', 'Gaming' , 'Cricket', 'Ipl', 'Mix'];

  return (
    <div className='flex space-x-4 ml-5 mb-2 overflow-x-auto' >
      {buttons.map((button, index) => (
        <button key={index} className='bg-gray-100 text-black font-bold py-2  px-3 rounded'>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
