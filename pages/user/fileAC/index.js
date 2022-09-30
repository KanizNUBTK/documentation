import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FIleFormAC = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>File From A/C Page</h5>
                    <div className='m-4'>
                        <p>On this page, the user will see all his files in a table.</p>
                        <img className='h-auto w-auto' src='/images/file1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Feedback Page</h5>
                    <div className='m-4'>
                        <p>On this page, the user will see all his files in a table.</p>
                        <img className='h-auto w-auto' src='/images/rate.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default FIleFormAC;