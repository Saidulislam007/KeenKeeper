import React from 'react';
import Navbar from '../layout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../layout/Footer';



const HomePages = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePages;