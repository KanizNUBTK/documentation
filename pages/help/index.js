import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { FcOnlineSupport } from "react-icons/fc";
import { BsFacebook, BsSkype, BsWhatsapp, BsYoutube } from "react-icons/bs";
import Link from 'next/link';

const HelpPage = () => {
    return (
        <AdminLayout>
            <div className=' p-10 m-8 rounded grid grid-cols-2 gap-8 font_family'>
                <div>
                    <h2 className='flex gap-2 items-center text-[34px]'><span ><FcOnlineSupport size={30} /></span> Get in touch</h2>
                    <p className='text-[18px] leading-loose'>Want to get in touch? We would love to hear from you.</p>
                    <p className='text-[20px]'>Email: <a href={`mailto:support@appstick.com.bd`} className='cursor-pointer' target='_blank'>support@appstick.com.bd</a></p>
                    <p className='text-[20px]'>Website: <a href={`https://appstick.com.bd`} className='cursor-pointer ' target='_blank'>www.appstick.com.bd</a></p>
                    <p className=' cursor-pointer text-[18px] p-3 w-[40%] bg-[#00A4E1] rounded-lg'><a href={`https://join.skype.com/invite/vAanTx5sbAUD`} className='flex items-center gap-2 text-white' target='_blank'><span><BsSkype size={35} /></span> Chat on Skype</a></p>
                    <p className=' cursor-pointer text-[18px] p-3 w-[40%] bg-green-500 rounded-lg'><a href={`https://wa.me/+8801404049797`} className='flex items-center gap-2 text-white' target='_blank'><span><BsWhatsapp size={35} /></span> Chat on Whatsapp</a></p>
                    <p className=' cursor-pointer text-[18px] p-3 w-[40%] bg-blue-500 rounded-lg'><a href={`https://www.facebook.com/appstick.com.bd`} className='flex items-center gap-2 text-white' target='_blank'><span><BsFacebook size={35} /></span> Chat on Facebook</a></p>
                    <p className=' cursor-pointer text-[18px] p-3 w-[40%] bg-[#FF0000] rounded-lg'><a href={`https://www.youtube.com/channel/UC3FOvh2oLyTOb3jTjJafBFw`} className='flex items-center gap-2 text-white' target='_blank'><span><BsYoutube size={35} /></span> Our Youtube Channel</a></p>
                </div>
                <div className='bg-[#f3f6fe] flex items-center drop-shadow-lg h-[600px] w-full'>
                    <img className='scene rounded drop-shadow-lg' src="/images/appstick.jpg" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default HelpPage;