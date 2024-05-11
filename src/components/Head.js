import React from 'react';

const Head = () => {
  return (
    <div className='grid grid-cols-3 bg-white shadow-md   items-center'>
      <div className='flex items-center pl-4'>
        <img className='w-8 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CLzMC7f44_sdz_8rF1FgHQslSjz_PkTmp_w1uhHUbg&s" alt="hamburgericon" />
        <img className='w-10' src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="youtubeicon" />
      </div>
      <div className='flex justify-center'>
        <input className='border border-gray-300 p-2 rounded-lg mr-2' type="text" placeholder="Search..." />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg'>Search</button>
      </div>
      <div className='flex justify-end pr-4'>
        <img className='w-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Icon" />
      </div>
    </div>
  );
};

export default Head;
