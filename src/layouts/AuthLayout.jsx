import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <section className=' bg-gray-100'>
            <div className='mx-auto min-h-screen w-10/12'>
                <header className='py-8'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default AuthLayout;