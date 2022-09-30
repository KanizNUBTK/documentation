import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AboutPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>About Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see simple text.</p>
                        <img className='h-auto w-auto' src='/images/a1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>About Compnay</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see some text of about the company and a photo,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/a2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Company Goal</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see some text of goal of the company and a photo,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/a3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our Executive Team</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company executive information and photo,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/a4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our  Accounting Affiliates</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company accounting affiliates information and photo,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/a5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Compnay Portfolio</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company portfolio photos,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/a5.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AboutPage;