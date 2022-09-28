import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Login = () => {
    return (
        <AdminLayout>
            <h1 className='text-center'>Admin Login</h1>
            <div className='bg-gray-50 h-auto m-10 w-[90%] text-[16px]'>
                <p>You can access your admin dashboard by yourdomain.com/login. then you will see option to login to admin panel</p>
                <img className='h-96' src='/images/login.png' alt="" />
                <p>Here is default admin login details</p>
                <ul className='list-disc'>
                    <li>Username: admin@appstick.com</li>
                    <li>Password: 123456</li>
                </ul>
                <p>Do not forget to change default admin password and username.</p>
            </div>
        </AdminLayout>
    );
};

export default Login;