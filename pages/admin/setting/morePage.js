import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const MorePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
            <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>More Pages</p>
                </div>
                    <h5 className='border-b-[1px] border-black'>More Pages</h5>
                    <div className='m-4'>
                        <p>On this page you can add an additional page for your website, where you can specify the menu or footer to display. You can also delete and update data
                        </p>
                        <img className='h-auto w-auto' src="/images/more.png" alt="" />
                        <p className='mt-4'>Admin can write any type of content through this draft board</p>
                        <img className='h-auto w-auto' src="/images/draft.png" alt="" />
                        
                    </div>
            </div>
        </AdminLayout>
    );
};

export default MorePage;