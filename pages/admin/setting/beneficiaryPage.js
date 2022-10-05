import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const BeneficiaryPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>About Page</p>
                </div>
                <h4 className='text-center'>Website live page information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Website tax situation page information</h5>
                    <div className='m-4'>
                        <p>This form takes the all user role information, This information will be display on the tax situation page in the live website</p>
                        <img className='h-auto w-auto' src="/images/situation.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default BeneficiaryPage;