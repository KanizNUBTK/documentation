import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const HomePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Website live page information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website home page information</h5>
                    <div className='m-4'>
                        <p>This form takes live website main page information, This information will be display on the home page in the live website</p>
                        <img className='h-auto w-auto' src="/images/home.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default HomePage;