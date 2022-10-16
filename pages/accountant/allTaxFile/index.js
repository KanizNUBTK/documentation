import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AcAllFiles = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant All Tax files</h5>
                    <div className='m-4'>
                        <p>After the admin gives access to the tax file accountant, the file information in the mentioned table, </p>
                        <img className='w-auto h-auto my-2' src="/images/acFile.png" alt="" />
                        <ul className='list-disc'>
                            <li><span className='font-bold text-red-500'>Download button and Action column: </span>Accountant can download a file. If he wants to download multiple files, he needs to mark the files. He can download the file in Excel, PDF or CSV format.</li>
                            <li><span className='font-bold text-red-500'>Details button in action column: </span>view the file information specifically,</li>
                            <li><span className='font-bold text-red-500'>Email: </span> Accountant can email users for any need,
                                <img className='w-auto h-[300px] my-2' src="/images/scEmail.png" alt="" /></li>
                            <li><span className='font-bold text-red-500'>Send File: </span>After completing his work, the accountant will submit the user file using the send file option. When he sends the file to the user, the administrator, user, and accountant will also receive a submission email.</li>
                            <li><span className='font-bold text-red-500'>Status:</span>An accountant can change the file status or view the file review status.
                                <div className='md:flex justify-around items-center flex-wrap gap-2'>
                                    <img className='w-auto h-auto border' src="/images/status1.png" alt="" />
                                    <img className='w-auto h-auto border' src="/images/status2.png" alt="" />
                                </div>
                                <p className='shadow p-4 text-red-500 font-bold'>***If a file needs review, the accountant can see the status, but until the admin selects a specific accountant, the accountant cannot start working on that file.***</p>
                            </li>
                            <li><span className='font-bold text-red-500'>Search : </span>Accountant can search any file using ID</li>
                            <li>He can determine the number of rows in the table through <span className='font-bold text-red-500'>Show entire</span>
                                <img className='w-auto h-auto my-2' src="/images/row.png" alt="" /></li>
                        </ul>
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