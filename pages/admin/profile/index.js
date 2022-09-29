import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Profile = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Profile Drop Down</h5>
                    <div className='m-4'>
                        <p>It’s verify easy to edit your admin profile info, after login to admin panel check top right corner for edit profile menu, as like below image</p>
                        <img className='h-[300px]' src="/images/profile1.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Profile Page</h5>
                    <div className='m-4'>
                        <p>now you can change your profile info as you want</p>
                        <img className='h-[300px]' src="/images/profile.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Profile;