import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FeedbackUser = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Feedback Page</h5>
                    <div className='m-4'>
                        <p>On this page, User can give their personal opinion of the service, they can give ratings up to 5 and give their valuable opinion</p>
                        <img className='h-auto w-auto' src='/images/rate.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default FeedbackUser;