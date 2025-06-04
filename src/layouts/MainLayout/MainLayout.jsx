import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </div>
    );
};

export default MainLayout;