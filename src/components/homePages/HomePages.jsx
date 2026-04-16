import React from 'react';
import Navbar from '../layout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../layout/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const HomePages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        className="text-sm sm:text-base"
        toastClassName="rounded-xl shadow-lg"
        bodyClassName="font-medium" />
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePages;