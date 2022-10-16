import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const WorkFlow = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='text-center text-[20px] font-bold'>Work flow</h5>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 1</h5>
                    <p>.</p>
                    <img className='h-auto w-auto' src="/images/provicen.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default WorkFlow;