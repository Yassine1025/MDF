import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Pages/Footer';
export default function Layout() {
  return (
    <div>
        <header >
        
        </header>
        <main className='Container'>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </main>
        <footer>
            
        </footer>

    </div>
  )
}