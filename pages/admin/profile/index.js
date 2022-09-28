import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Profile = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-10 w-[90%] text-[16px] p-10'>
                <p>It’s verify easy to edit your admin profile info, after login to admin panel check top right corner for edit profile menu, as like below image</p>
                <img className='h-[300px]' src="/images/profile1.png" alt="" />
                <p>now you can change your profile info as you want</p>
                <img className='h-[300px]' src="/images/profile.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default Profile;