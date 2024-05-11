import React, { useState } from 'react';
import Head from './Head';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="grid grid-cols-3">
      <div className={isSidebarOpen ? 'block' : 'hidden'}>
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Head onToggleSidebar={toggleSidebar} />
        {/* Main content */}
      </div>
    </div>
  );
};

export default Layout;
