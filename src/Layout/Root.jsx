import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
    return (
        <div className='-mt-8 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <Navbar ></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;