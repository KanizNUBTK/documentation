import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AcAllFiles = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant All Tax files</h5>
                    <div className='m-4'>
                        <p>After the admin gives access to the tax file accountant, the file information in the mentioned table, the accountant can now download one or more files, view the file information specifically, can download the file in Excel, PDF, CSV format.Accountant can send any file to user or administrator, Accountant can send any file to user or administrator, using send file column if needed.</p>
                        <img className='h-[500px]' src="/images/acFile.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Details Of A Single Tax files</h5>
                    <div className='m-4'>
                        <p>On this page, an accountant can see the details of a specific file.</p>
                        <img className='w-auto h-auto' src="/images/acDetail.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AcAllFiles;