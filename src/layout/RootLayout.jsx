import React from 'react'
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';



const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <div className='mx-5'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout
