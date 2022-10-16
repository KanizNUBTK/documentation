import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const MyTaxFile = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Tax Submission</h5>
                    <div className='m-4'>
                        <p>On this page, every user can see all his tax file processing information in card form. The processing of a tax file is done in several steps</p>
                        <img className='h-auto w-auto' src='/images/submission.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 15%</h5>
                    <div className='m-4'>
                        <p>On this card, When the user does not fill the form completely.</p>
                        <img className='h-auto w-auto' src='/images/card1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 25%</h5>
                    <div className='m-4'>
                        <p>On this card, when the user submits his form but the payment is not completed then 25% of the complete work will be completed</p>
                        <img className='h-auto w-auto' src='/images/card2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 50%</h5>
                    <div className='m-4'>
                        <p>On this card, when the user complete his  payment then show 50% </p>
                        <img className='h-auto w-auto' src='/images/card3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 75%</h5>
                    <div className='m-4'>
                        <p>On this card, when the admin submits the user form to the accountant then show 75% </p>
                        <img className='h-auto w-auto' src='/images/card4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 100%</h5>
                    <div className='m-4'>
                        <p>On this card, When all the work is complete, the user can see 100% status and after that the file download button enables and user can download his form</p>
                        <img className='h-auto w-auto' src='/images/card5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Download Button</h5>
                    <p>A user cannot download his file until the working process is 100%</p>
                    <div className='m-4 md:grid md:grid-cols-2'>
                        <img className='h-auto w-auto' src='/images/card7.png' alt="" />
                        <img className='h-auto w-auto' src='/images/card6.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MyTaxFile;