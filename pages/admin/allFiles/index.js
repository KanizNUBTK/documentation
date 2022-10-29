import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AllTaxFiles = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin All tax File</h5>
                    <p>On this page the admin can see the tax files of all the clients given to him, he can appoint the accountant as he wants, download the necessary documents.</p>
                    <img className='h-auto w-auto' src="/images/allfiles.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin All tax File <span className='text-red-500'> Action Button</span></h5>
                    <p>In action column, you can see PDF, Excel download button, delete button, view details button and contact user with <span className='text-red-500 italic font-medium'>WhatsApp</span> button.</p>
                    <img className='h-auto w-auto mx-auto' src="/images/allfiles1.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>File Details</h5>
                    <p>On this page you can see all information in this file</p>
                    <img className='h-auto w-auto' src="/images/filedetail.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Delete Option</h5>
                    <p>When you can delete a file or something, first you will see the e-notification pop-up bar, when you confirm, you can delete the document otherwise not.</p>
                    <img className='h-auto w-auto' src="/images/delete.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default AllTaxFiles;