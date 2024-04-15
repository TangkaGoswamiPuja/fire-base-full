import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div  className='max-w-6xl mx-auto'>

            <Outlet></Outlet>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Root;