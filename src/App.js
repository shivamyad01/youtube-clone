import React from 'react';
import Body from './components/Body';
import Head from './components/Head';

const App = () => {
  return (
    
       <div>
        <div className="fixed top-0 left-0 w-full bg-white z-50">
        <Head/>
     
    </div>
        
       
        <Body/>

       </div>


     
    
  );
}

export default App;
