import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import CreateProfile from './Pages/CreateProfile';


const App = () => {

  return (
    <div className=''>
     <Router>
        <Routes>
            <Route path="/" Component={Users}/>
            <Route path="/create-profile" Component={CreateProfile}/>
        </Routes>
      
      </Router> 
    </div>
  );
}

export default App;
