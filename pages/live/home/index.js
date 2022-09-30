import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const HomePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Home Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see some text and 2 photos, all the sections are dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>File With An Expart</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see three cards of office working process-related information.</p>
                        <img className='h-auto w-auto' src='/images/h2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>why taxstick </h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company highlighting information,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our Service</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company service-related card displayed on a slide show, this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>User feedback </h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see they users feedback,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>More Information</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see 3 three information related video,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h6.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Contact us</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can send an email to the admin of the company,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h7.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>File Taxes</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see tax file submission process-related information and video,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h8.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>partnership</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the partnership company logo,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h9.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>footer and copy right</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the footer and copy right information,this seaction is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h10.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default HomePage;