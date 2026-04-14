import React from 'react';
import Navbar from '../layout/Navbar';
import { Outlet } from 'react-router';
import Banner from '../banner/Banner';

const HomePages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePages;