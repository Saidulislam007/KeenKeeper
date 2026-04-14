import React from 'react';
import Navbar from '../layout/Navbar';
import { Outlet } from 'react-router';

const HomePages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePages;