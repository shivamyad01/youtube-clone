import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Head from './components/Head';
import WatchPage from './components/WatchPage';

const App = () => {
  return (
    <Router>
      <div>
        <div className="fixed top-0 left-0 w-full bg-white z-50">
          <Head />
        </div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
