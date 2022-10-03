import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const userFormsFields = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Forms Feilds</h5>
                    <p>On this page, all user information can be displayed. User fills his/her personal form data in 3 steps, admin can define what fields will be there in each step, delete and update if necessary</p>
                    <img className='h-auto w-auto' src="/images/userForm.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>View Forms Feilds button</h5>
                    <p>Admin can view all forms on this page Form fields and required information, and admin can delete any type of feild</p>
                    <img className='h-auto w-auto' src="/images/viewFormfield.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Add New feilds</h5>
                    <p>When the admin clicks Add New Field, he will see a drawer, first you select the user role and then the new form field will be created by filling the form. </p>
                    <img className='h-auto w-auto' src="/images/addfeild.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default userFormsFields;