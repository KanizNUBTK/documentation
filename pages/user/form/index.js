import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const index = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>User Tax file Submit form fill sup process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 1</h5>
                    <div className='m-4'>
                        <p>User must first select the year to submit his tax file</p>
                        <img className='h-auto w-auto' src='/images/usForm1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 2</h5>
                    <div className='m-4'>
                        <p>Then fill up his/her information and submit tax files, then click save and next button</p>
                        <img className='h-auto w-auto' src='/images/usForm2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 3</h5>
                    <div className='m-4'>
                        <p>Then fill up his/her income information form and click the save and finish button.</p>
                        <img className='h-auto w-auto' src='/images/income.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 3</h5>
                    <div className='m-4'>
                        <p>Then the user can see his total payment information, after payment is complete, your file submit to the admin</p>
                        <img className='h-auto w-auto' src='/images/pay.png' alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Admin can activate any payment method as per his convenience and the user will make payment using the activated payment system</p>
                        <img className='h-auto w-auto' src='/images/pay1.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default index;