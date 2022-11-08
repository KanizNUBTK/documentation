import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AccountantLogin = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Sign Up</h5>
                    <div className='m-4'>
                        <p>A new User can register his account use this form. At first s/he will check mark the New user button, then select his role, after fill up the form.</p>
                        <img className='h-96' src='/images/signup.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Email Notification</h5>
                    <div className='m-4'>
                        <p>You will receive an email notification at this point when the user completes his registration. He can activate his account within 24 hours by clicking on the link provided in the email. Or he can wait for admin confirmation.</p>
                        <img className='h-auto' src='/images/usact.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Login</h5>
                    <div className='m-4'>
                        <p>After confirming the registration, the user will be allowed to log into his dashboard.</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User dashboard</h5>
                    <div className='m-4'>
                        <p>After user login complete s/he can see his personal dashboard</p>
                        <img src="/images/usdash.png" alt="" />
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