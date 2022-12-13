import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Navbar from '../shered/Navbar';

const Main = () => {
    const [dark,setDark] = useState(false);
    const mode=()=>{
      setDark(!dark)
    }
    return (
        <div data-theme={dark ? 'dark' : 'light'}>
            <Navbar mode={mode} dark={dark}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;