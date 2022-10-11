import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Backend Installing Process</h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 1</p>
                            Then you need to deploy the backend in your Domain or subdomain at first. <span className='italic'> But we recommend subdomains actually, For example,<span className=' text-red-400'>backend.your_main_domain@something.com.</span></span>
                            <br /> But for deployment, you need to zip the backend file at first.
                            <img className='h-[500px] w-auto mt-4' src="/images/i4.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 2</p>
                            Then you have to go to your server panel or cPanel, then click the upload button.
                            <img className='h-[500px] w-auto mt-4' src="/images/b1.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 3</p>
                            After clicking upload button, you can get this type of window and you have to select upload button.
                            <img className='h-[500px] w-auto mt-4' src="/images/b2.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4</p>
                            Then select <span className='italic text-red-400'>taxstick-backend.zip</span>  file and click open button.
                            <img className='h-[500px] w-auto mt-4' src="/images/b3.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 5</p>
                            Then select the Upload button and your project will start uploading to your hosting server.
                            <img className='h-[500px] w-auto mt-4' src="/images/b4.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 6</p>
                            After finishing uploading, close the window
                            <img className='h-[500px] w-auto mt-4' src="/images/b5.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 7</p>
                            Then select the file and <span className='italic text-red-400'>Unzip</span> it on the server,
                            <img className='h-[500px] w-auto mt-4' src="/images/b6.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 8</p>
                             Then you can see the <span className='italic text-red-400'>decompress window</span>  and click the confirm button, your file is now unzipped,
                            <img className='h-[500px] w-auto mt-4' src="/images/b7.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 9</p>
                             Now your file is finally uploaded to your server.
                            <img className='h-[500px] w-auto mt-4' src="/images/b8.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 10</p>
                             Then you can find the <span className='italic text-red-400'> Website</span> button in the sidebar and click on it .
                            <img className='h-[500px] w-auto mt-4' src="/images/b9.png" alt="" />
                        </li>
                        <li className='my-4'> 
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 11</p>
                        Then you can find the <span className='italic text-red-400'> Node Product</span> button on the top of the page and click it first. Then click <span className='italic text-red-400'> add node project</span> button
                            <img className='h-[500px] w-auto mt-4' src="/images/b10.png" alt="" />
                        </li>
                        <li className='my-4'> 
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 12</p>
                        Then click the pointed button,
                            <ul className='list-disc'>
                                <li>to select your folder path,</li>
                                <li> fill up the Name,(do not give line space in the name, use underscore)</li>
                                <li>Select Run opt,</li>
                                <li>select the port,</li>
                                <li>select node version, </li>
                                <li>and give your domain name</li>
                            </ul>
                            Then click on confirm button. Make sure all information is correct
                            <img className='h-auto w-auto mt-4' src="/images/b11.png" alt="" />
                        </li>
                        <li className='my-4'> 
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 13</p>
                        Then click the file and right-click on your mouse, then you can get a new window
                            <img className='h-[500px] w-auto mt-4' src="/images/b12.png" alt="" />
                        </li>
                        <li className='my-4'> 
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 14</p>
                        Then Click SSL, then select two checkboxes and apply them
                            <img className='h-auto w-auto mt-4' src="/images/b15.png" alt="" />
                        </li>
                        <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 15</p>
                             Then you can see on the top of the window a Force HTTPS switch, pleace click it on
                            <img className='h-auto w-auto mt-4' src="/images/b14.png" alt="" />
                        </li>
                    </ul>
                    <h6 className='text-red-600 p-4  border-[1px] border-red-600 text-center'>Now your backend project is ready to use. Please copy your subdomain URL to run your frontend project, For example ,<span className=' italic'>backend.your_main_domain@something.com.</span></h6>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;