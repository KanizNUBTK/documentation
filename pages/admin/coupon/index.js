import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Coupon = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Page</h5>
                    <p>On this page, admin can view his tax wise coupon information, he will get detail, edit and delete option.</p>
                    <img className='h-auto w-auto' src="/images/coupon.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Assign Coupon Drop Down</h5>
                    <p>On drop down page, admin can assign coupons for specific roles.</p>
                    <img className='h-auto w-auto' src="/images/assCoupon.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Add Page</h5>
                    <p>On this page, the admin can add new Coupon information .</p>
                    <img className='h-auto w-auto' src="/images/addCou.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Information Update Page</h5>
                    <p>On this page, the admin can update  Coupon information.</p>
                    <img className='h-auto w-auto' src="/images/editCou.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Coupon;