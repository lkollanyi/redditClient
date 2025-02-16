import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header  from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


const subName = "Home";

const AppLayout = () => {
    return (
        <div data-testid="app-layout" className='layout'> 
            <header className='header'>
                <Header/> 
            </header>
            <aside className='sidebar'>
                <Sidebar/>
            </aside>
            <main className='main-feed'>
                <h2>{subName}</h2>
                <Outlet data-testid="outlet" />
            </main>
            
        </div>
        //layout here
        //searchbar
        //sidebar
        //outlet for main content, error message, etc
        
    );
};

export default AppLayout;