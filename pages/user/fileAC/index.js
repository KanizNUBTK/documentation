import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FIleFormAC = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>File From A/C Page</h5>
                    <div className='m-4'>
                        <p>The user will see his complete file on this page in the table. You can download your files from here. Again if any problem is shown in your file then you can take maximum two reviews.</p>
                        <img className='h-auto w-auto' src='/images/file1.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout >
    );
};

export default FIleFormAC;