import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const PasswordReset = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='border-b-[1px] border-black'>Password rest option</h5>
                <div className='m-4'>
                    <p>If an account user has forgotten the password, click on the Forgot Password option and enter the email ID with which the account was opened. then you get an email with a password reset link. After clicking the link you see the password reset option.</p>
                    <img className='w-auto h-auto my-2' src="/images/reemail.png" alt="" />
                    <p>Now you can change your password.</p>
                    <img className='w-auto h-auto my-2' src="/images/reset.png" alt="" />
                </div>
            </div>
        </AdminLayout >
    )
}

export default PasswordReset;