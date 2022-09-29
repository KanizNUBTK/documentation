import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Province = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Page</h5>
                    <p>On this page, the admin can view tax information according to his province, he will get detail, edit, and delete options.</p>
                    <img className='h-[500px]' src="/images/provicen.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Province Details Page</h5>
                    <p>On this page, the administrator can view a specific province information.</p>
                    <img className='h-[500px]' src="/images/proDetails.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Add Page</h5>
                    <p>On this page, the administrator can add new province information tax information.</p>
                    <img className='h-[500px]' src="/images/proAdd.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Information Update Page</h5>
                    <p>On this page, the administrator can update  province information tax information.</p>
                    <img className='h-[500px]' src="/images/proedit.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Province;