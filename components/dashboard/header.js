import React from 'react';
import { FaBars, FaTh } from "react-icons/fa";



const Header = () => {

    return (
        <div className='header border-b-2 border-red-300'>
            <div className='pl-6'>
                <FaBars size={22} role="button" onClick={() => {
                    document.querySelector('.dashboard')?.classList.toggle(window.innerWidth >= 1024 ? 'mini' : 'mobile')
                }} />
                <h2 className='text-center text-[20px]'>Welcome To Tax File Documentation</h2>
            </div>
        </div>
    );
};

export default Header;