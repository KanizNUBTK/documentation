import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Install = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center'>Installing Process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black pb-2'>Install</h5>
                    <div className='m-4'>
                        <h6 className='text-red-600 border-b-[1px] border-red-600 text-center pb-2'>** To setup this project, you need to make sure that your hosting server supports node.js **</h6>
                        <ul className='list-disc'>
                            <li className='my-4'>First, You have to Download the file, You can get a zip file.
                                <img className='h-[500px] w-auto mt-4' src="/images/i1.png" alt="" />
                            </li>
                            <li className='my-4'>Then, You have to <span className='text-[20px] font-bold text-red-500'>Extract All</span> the file .
                                <img className='h-[500px] w-auto mt-4' src="/images/i2.png" alt="" />
                            </li>
                            <li className='my-4'>Then, You can getTwo file <span className='text-[20px] font-bold text-red-500'>1. taxstick-backend</span> and <span className='text-[20px] font-bold text-red-500'>2. taxstick-frondend</span> .
                                <img className='h-[500px] w-auto mt-4' src="/images/i3.png" alt="" />
                            </li>
                            <p className='text-center'>Now you need to follow these pages</p>
                            <div className='flex justify-center items-center gap-4'>
                                <div className="h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]">
                                    <Link href='/instruction/backend'><a className='text-white text-lg font-bold'>Backend Installing Process</a></Link>
                                </div>
                                <div className="h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]">
                                    <Link href='/instruction/frontend'><a className='text-white text-lg font-bold'>Frontend Installing Process</a></Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Install;