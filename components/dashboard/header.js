import React from 'react';
import { FaBars, FaTh } from "react-icons/fa";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { MdPerson, MdOutlineNotificationsNone, MdSettings } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from 'next/router';
import { FaSignOutAlt } from "react-icons/fa";
import Link from 'next/link';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiDotsHorizontal } from "react-icons/hi";



const Header = () => {
    const router = useRouter();


    // dropdown menu of profile
    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <Link href="/profile">
                            <a rel="noopener noreferrer" className='flex gap-2 px-2 py-1'>
                                <span className='text-[#40c25a] hover:text-purple-500'>
                                    <MdPerson size={20} />
                                </span>
                                <span className='text-[#2caf47] hover:text-purple-500'>
                                    Profile
                                </span>
                            </a>
                        </Link>
                    ),
                    key: '0',
                },
                {
                    label: (
                        <a rel="noopener noreferrer" href="https://dashboard.tawk.to/" target='_blank' className='flex gap-2 px-2 py-1'>
                            <span className='text-[#40c25a] hover:text-purple-500'>
                                <BsFillChatDotsFill size={18} />
                            </span>
                            <span className='text-[#2caf47] hover:text-purple-500'>
                                Messages
                            </span>
                        </a>
                    ),
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: (
                        <a rel="noopener noreferrer" href="#" className='flex gap-2 ml-1 px-2 py-1' >
                            <span className='text-purple-500'>
                                <FaSignOutAlt size={18} />
                            </span>
                        </a>
                    ),
                    key: '3',
                    disabled: false,
                },
            ]}

            className='mt-2'
        />
    );



    return (
        <div className='header flex items-center'>
            <div className='pl-6'>
                <FaBars size={22} role="button" onClick={() => {
                    document.querySelector('.dashboard')?.classList.toggle(window.innerWidth >= 1024 ? 'mini' : 'mobile')
                }} />

            </div>

            <span className='pl-8 text-purple-700 text-[16px]'><FiPhoneCall /></span>
            <span className='font-sans pl-2 text-purple-700 text-[16px]'> </span>

            <div className='flex items-end justify-end w-full mr-10'>
                <Link href="https://dashboard.tawk.to/">
                    <a target='_black' className='text-[#3fc55a]'>
                        <div className='mr-5 md:mr-8 relative cursor-pointer'>
                            <MdOutlineNotificationsNone size={22} role="button" className='hover:text-purple-500'/>
                            <div className='absolute -top-1 -right-1 bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-white'>
                                <span className='text-[11px] font-semibold'> <HiDotsHorizontal /> </span>
                            </div>
                        </div>
                    </a>
                </Link>


                <Dropdown overlay={menu}>
                    <a onClick={e => e.preventDefault()} className="text-[#3fc55a] hover:text-purple-600">
                        <Space>
                            {/* Hover me */}
                            <MdPerson size={22} role="button" className='inline-block' />
                            <DownOutlined className='inline-block' />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;