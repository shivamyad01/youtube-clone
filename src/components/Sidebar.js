import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-1/4 h-screen bg-gray-100 overflow-y-auto p-4 mt-10'>
      <div>
        <h1 className='text-xl font-bold mb-4'>Menu</h1>
        <ul className='space-y-2 justify-center'>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Home</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Shorts</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Subscription</li>
        </ul>
      </div>
      <div>
        <h1 className='text-xl font-bold mb-4 mt-8'>Categories</h1>
        <ul className='space-y-2'>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Music</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Sports</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Gaming</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Movies</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Tech</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Cooking</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Fashion</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div>
        <h1 className='text-xl font-bold mb-4 mt-8'>Subscription</h1>
        <ul className='space-y-2'>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Music</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Sports</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Gaming</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Movies</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Tech</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Cooking</li>
          <li className='text-lg hover:bg-gray-200 rounded-lg p-2 transition duration-300'>Fashion</li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
