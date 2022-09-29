import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const userDisplay = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User </h5>
                    <p>On this page, admin can view all client account, he will see all information of client account, he will get details, edit, delete option in action column.</p>
                    <img className='h-[500px]' src="/images/user.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Details Page</h5>
                    <p>On this page, the administrator can view a specific client account.</p>
                    <img className='h-[500px]' src="/images/userDetails.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Information Edit Page</h5>
                    <p>On this page, the administrator can edit the information of a specific client.</p>
                    <img className='h-[500px]' src="/images/userEdit.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default userDisplay;