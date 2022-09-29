import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const RolePermission = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Display Role Information</h5>
                    <p>On this page, the admin role display table. The action column of the table has role update button</p>
                    <img className='h-[400px]' src="/images/role.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Role Update Page</h5>
                    <p>On this page, the admin can view a specific role information , he also update imformation.</p>
                    <img className='h-[400px]' src="/images/roleEdit.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Role Permission Page</h5>
                    <p>On this page, the admin can view a specific role information , he also update imformation.</p>
                    <img className='h-[400px]' src="/images/permit.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Role Added Page</h5>
                    <p>On this page, the admin can add unlimited user roles for his website. he can see all the user roles at the bottom of the page. If he wants, he can update and delete the user role</p>
                    <img className='h-[400px]' src="/images/roleAdd.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Updated Single Role Page</h5>
                    <p>On the drawer, Admin can see user role information</p>
                    <img className='h-[400px]' src="/images/upRole.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default RolePermission;