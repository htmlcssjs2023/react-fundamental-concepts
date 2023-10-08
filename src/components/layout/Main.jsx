import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import ViewRsult from '../ViewResult/ViewRsult';
const Main = () => {
    return (
        <div> 
           <div className="header">
           <Header></Header>
           </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;