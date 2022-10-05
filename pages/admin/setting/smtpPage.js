import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const SMTPPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Website live page information</h4>  
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website SMTP Information</h5>
                    <div className='m-4'>
                        <p>This form takes the Simple Mail Transfer Protocol (SMTP) information.</p>
                        <img className='h-auto w-auto' src="/images/smtp.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default SMTPPage;