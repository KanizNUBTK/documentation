import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Install = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center'>Installing Process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black pb-2'>Install</h5>
                    <div className='m-4'>
                        <h6 className='text-red-600 border-b-[1px] border-red-600 text-center pb-2'>*To setup this project, you need to make sure that your hosting server supports node.js</h6>
                        <ul className='list-disc'>
                            <li className='my-4'>First, You have to Download the file, You can get a zip file.
                                <img className='h-[500px] w-auto mt-4' src="/images/i1.png" alt="" />
                            </li>
                            <li className='my-4'>Then, You have to <span className='text-[20px] font-bold text-red-500'>Extract All</span> the file .
                                <img className='h-[500px] w-auto mt-4' src="/images/i2.png" alt="" />
                            </li>
                            <li className='my-4'>Then, You can getTwo file <span className='text-[20px] font-bold text-red-500'>1. taxstick-backend</span> and <span className='text-[20px] font-bold text-red-500'>2. taxstick-frondend</span> .
                                <img className='h-[500px] w-auto mt-4' src="/images/i3.png" alt="" />
                            </li>
                            <p className='border-b-[1px] border-black my-4 text-[20px] font-bold text-red-500 p-2'>Backend</p>
                            <li className='my-4'>Then you need to deploy the backend in your Domain or subdomain at first. <span className='italic'> But we recommend subdomains actually, For example,<span className=' text-red-400'>backend.your_main_domain@something.com.</span></span>
                                <br /> But for deployment, you need to zip the backend file at first.
                                <img className='h-[500px] w-auto mt-4' src="/images/i4.png" alt="" />
                            </li>
                            <li className='my-4'>Then you have to go to your server panel or cPanel, then click the upload button.
                                <img className='h-[500px] w-auto mt-4' src="/images/b1.png" alt="" />
                            </li>
                            <li className='my-4'>After clicking upload button, you can get this type of window and you have to select upload button.
                                <img className='h-[500px] w-auto mt-4' src="/images/b2.png" alt="" />
                            </li>
                            <li className='my-4'>Then select <span className='italic text-red-400'>taxstick-backend.zip</span>  file and click open button.
                                <img className='h-[500px] w-auto mt-4' src="/images/b3.png" alt="" />
                            </li>
                            <li className='my-4'>Then select the Upload button and your project will start uploading to your hosting server.
                                <img className='h-[500px] w-auto mt-4' src="/images/b4.png" alt="" />
                            </li>
                            <li className='my-4'>After finishing uploading, close the window
                                <img className='h-[500px] w-auto mt-4' src="/images/b5.png" alt="" />
                            </li>
                            <li className='my-4'>Then select the file and <span className='italic text-red-400'>Unzip</span> it on the server,
                                <img className='h-[500px] w-auto mt-4' src="/images/b6.png" alt="" />
                            </li>
                            <li className='my-4'> Then you can see the <span className='italic text-red-400'>decompress window</span>  and click the confirm button, your file is now unzipped,
                                <img className='h-[500px] w-auto mt-4' src="/images/b7.png" alt="" />
                            </li>
                            <li className='my-4'> Now your file is finally uploaded to your server.
                                <img className='h-[500px] w-auto mt-4' src="/images/b8.png" alt="" />
                            </li>
                            <li className='my-4'> Then you can find the <span className='italic text-red-400'> Website</span> button in the sidebar and click on it .
                                <img className='h-[500px] w-auto mt-4' src="/images/b9.png" alt="" />
                            </li>
                            <li className='my-4'> Then you can find the <span className='italic text-red-400'> Node Product</span> button on the top of the page and click it first. Then click <span className='italic text-red-400'> add node project</span> button
                                <img className='h-[500px] w-auto mt-4' src="/images/b10.png" alt="" />
                            </li>
                            <li className='my-4'> Then click the pointed button, 
                            <ul className='list-disc'>
                                <li>to select your folder path,</li>
                                <li> fill up the Name,</li>
                                <li>do not give line space in the name,</li>
                                <li>select the port,</li>
                                <li>select node version, </li>
                                <li>and give your domain name</li>
                            </ul>
                            Then click on confirm button. Make sure all information is correct 
                                <img className='h-auto w-auto mt-4' src="/images/b11.png" alt="" />
                            </li>
                            <li className='my-4'> Then click the file and right-click on your mouse, then you can get a new window
                                <img className='h-[500px] w-auto mt-4' src="/images/b12.png" alt="" />
                            </li>
                            <li className='my-4'> Then Click SSL, then select two checkboxes and apply them
                                <img className='h-[500px] w-auto mt-4' src="/images/b13.png" alt="" />
                            </li>
                            <li className='my-4'> Then you can see on the top of the window a Force HTTPS switch, pleace click it on
                                <img className='h-auto w-auto mt-4' src="/images/b14.png" alt="" />
                            </li>
                            <h6 className='text-red-600 p-4  border-[1px] border-red-600 text-center'>Now your backend project is ready to use. Please copy your subdomain URL to run your frontend project, For example ,<span className=' italic'>backend.your_main_domain@something.com.</span></h6>
                            <p className='border-b-[1px] border-black my-4 text-[20px] font-bold text-red-500 p-2'>Forentend</p>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Install;