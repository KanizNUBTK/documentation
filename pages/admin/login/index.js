import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Login = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin Login</h5>
                    <div className='m-4'>
                        <p>You can access your admin dashboard by yourdomain.com/login. then you will see option to login to admin panel</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                        <p>Here is default admin login details</p>
                        <ul className='list-disc'>
                            <li>Username: admin@appstick.com</li>
                            <li>Password: 123456</li>
                        </ul>
                        <p>Do not forget to change default admin password and username.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin dashboard</h5>
                    <div className='m-4'>
                        <p>After login complete admin can see his personal dashboard</p>
                        <img src="/images/addash.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Login;