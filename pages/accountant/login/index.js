import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AccountantLogin = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant Sign Up</h5>
                    <div className='m-4'>
                        <p>A new Accountant can register his account use this form, but at first s/he need to check mark accountant button, then fill up the form. <span className='text-red-500'>An email will be sent to your email as a sign in confirmation</span></p>
                        <img className='h-96' src='/images/signup.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant Login</h5>
                    <div className='m-4'>
                        <p>After the admin confirms  the accountant of this company, the administrator will give the login email and password to the accountant, through which the accountant can log in to his dashboard.</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant dashboard</h5>
                    <div className='m-4'>
                        <p>After Accountant login complete s/he can see his personal dashboard</p>
                        <img src="/images/acdash.png" alt="" />
                    </div>
                </div>
                <div className='border-2 border-red-300 my-4 h-20  text-[18px] font-medium flex items-center justify-center'>
                    <p className='mb-0'><span className='text-[20px] text-red-500'>*</span>All users, accountants, and admins have the same type of profile page. they all can fill up their personal profile informationon</p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AccountantLogin;