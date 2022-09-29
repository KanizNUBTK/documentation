import React from 'react';
import { FaBars, FaTh } from "react-icons/fa";



const Header = () => {

    return (
        <div className='header border-2 rounded border-red-300 flex items-center'>
            <div className='pl-6'>
                <FaBars size={22} role="button" onClick={() => {
                    document.querySelector('.dashboard')?.classList.toggle(window.innerWidth >= 1024 ? 'mini' : 'mobile')
                }} />
            </div>
        </div>
    );
};

export default Header;