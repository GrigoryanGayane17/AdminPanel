import React from 'react';
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";


function Layout(props) {
    return (
        <div className={'xl2:flex'}>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Layout;