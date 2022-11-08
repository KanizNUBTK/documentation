import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const userDisplay = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Activation Process</h5>
                    <p>Admin can activate his users using these two types of system:</p>
                    <ul className='list-decimal'>
                        <li>When the user completes his registration, both the administrator and the user will receive an email. If the user wants to activate his account by clicking on the link provided through the email.</li>
                        <li>If user cannot activate his account using email, admin can activate his account.</li>
                        <span className='text-red-500'>*But noted that account activation time will expire within 24 hours.</span>
                        <img className='h-auto w-auto' src="/images/admail.png" alt="" />
                    </ul>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User </h5>
                    <p>On this page, admin can view all client account, he will see all information of client account, he will get details, edit, delete option in action column.</p>
                    <img className='h-auto w-auto' src="/images/user.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Details Page</h5>
                    <p>On this page, the administrator can view a specific client account.</p>
                    <img className='h-auto w-auto' src="/images/userdetails.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Information Edit Page</h5>
                    <p>On this page, the administrator can edit the information of a specific client.</p>
                    <img className='h-auto w-auto' src="/images/useredit.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default userDisplay;