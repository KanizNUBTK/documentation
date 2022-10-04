import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Frontend Installing Process</h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 1</p>
                            To frontend file deployment, you need to open the file first.
                            <br /> But for deployment, you need to zip the backend file at first.
                            <img className='h-[500px] w-auto mt-4' src="/images/front.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 2</p>
                            Then you need to find the <span className=' text-red-400'> next.config.js</span> file and open it in your appropriate text editor.
                            <img className='h-[500px] w-auto my-4' src="/images/f2.png" alt="" />
                            <p>Because you need to change the necessary information of your websites such as <span className=' text-red-400'>domain_name, BACKEND URL, and user_login mode</span> , in this case, you must be provided your personal backend domain or dub domain URL and save</p>
                            <img className='h-[500px] w-auto mt-4' src="/images/f3.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 3</p>
                            Then you need to open your terminal or command prompt (mac and linus user) or windows user you have to follow the picture.Select the address bar and type <span className=' text-red-400'>cmd</span>
                            <img className='h-[500px] w-auto my-4' src="/images/f5.png" alt="" />
                            <p>Then the command prompt open. type <span className=' text-red-400'>yran run buildexport</span> and hit enter</p>
                            <img className='h-[500px] w-auto my-4' src="/images/f6.png" alt="" />
                            <p>After build successfull , you can see <span className=' text-red-400'>build successfull</span> text and you can get out folder</p>
                            <img className='h-[500px] w-auto my-4' src="/images/f7.png" alt="" />

                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4</p>
                            <p>Then you can get <span className=' text-red-400'>out </span> folder and then you need to zip these folder.</p>
                            <img className='h-[500px] w-auto my-4' src="/images/f8.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 5</p>
                            <p>Then you go to your server panel or cPanel, Select your<span className=' text-red-400'>Document Root </span> and right click on your mouse.</p>
                            <img className='h-auto w-auto my-4' src="/images/f9.png" alt="" />
                            <p className='text-[20px] text-red-500 font-bold'>** Now you need to follow the backend installation process step 2 - step 8</p>
                        </li>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;