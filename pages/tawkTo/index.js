import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const TawkTo = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className=''>
                    <h5 className='border-b-[1px] border-black'>Tawt to</h5>
                    <p>Throughout this website, you can see this type of sign in the lower right corner. It is named <span className='font-bold text-red-500'>tawk. to</span> . We used this system to manage chatting or messages.</p>
                    <img className='h-[200px] w-auto mx-auto' src="/images/tawk.png" alt="" />
                    <div className='m-4'>
                        <p>After clicking on the icon, a user or visitor can access such chatting platform. They can directly message you for any queries. In these two images, you can see the status after clicking the icon and the time during live chatting.</p>
                        <div className='grid grid-cols-2'>
                            <img className='h-auto w-auto mx-auto' src="/images/tawk2.png" alt="" />
                            <img className='h-auto w-auto mx-auto' src="/images/tawk3.png" alt="" />
                        </div>
                        <p className='text-center text-red-500 m-2'>*Note that the user does not need to open an account there for live chat</p>
                    </div>
                    <div className='m-4'>
                        <p>If the admin uses this chatting system, he must have an account in. Account Opening process: <span className='font-bold text-red-500'>tawk. to</span></p>
                        <ul className='list-disc'>
                            <li>Here is the free sign link: <Link href={`https://dashboard.tawk.to/signup `}><a className='cursor-pointer text-red-500 font-bold'> tawk. to</a></Link></li>
                            <li>After completing the sign up you can go to the dashboard.</li>
                            <li>Then follow the picture instruction,
                                <img className='h-auto w-auto mx-auto' src="/images/tawk4.png" alt="" />
                            </li>
                            <li className='my-4'>Then copy the link and paste it in the admin panel,<span className='text-red-500'>Your Tawk To Source URL</span> feild.
                                <img className='h-auto w-auto mx-auto' src="/images/env.png" alt="" />
                            </li>
                            <li>Now the admin is able to establish his website live chatting platform, which is fully ready for use. Admin can download tawk.to mobile app also.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default TawkTo;