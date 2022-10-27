import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Setting = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center'>Env File Setup Information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>.env File Setup Information</h5>
                    <div className='m-4'>
                        <p>Now hit your domain on browser like, <span className='text-red-500 font-bold'>your_main_domain.com</span> first, the following page will be appeared. Now follow the below steps.</p>
                        <img className='h-auto w-auto' src="/images/setting.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Super Admin creation</h5>
                    <div className='m-4'>
                        <p>In this section, the super admin or company owner has to provide the basic information like username, email, phone number and password to activate the website.</p>
                        <img className='h-auto w-auto' src="/images/s1.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Database setup</h5>
                    <div className='m-4 '>
                        <div>Next, you have to setup the database. Here, we are suggesting to create a MongoDB database in MongoDB Atlas. Also, you can create database on your server too. Now follow the below steps.
                            <ul className='list-disc'>
                                <li>At first, you have to create a MongoDB Atlas account. <Link href="https://www.mongodb.com/atlas/database"><a >Click here</a></Link> to create account.You can choose any plan, also you can choose <span className='text-red-500'>free shared</span> plan too.
                                </li>
                                <li className='my-4'>Now you can see of your mondoDB account dashboard. You have to create <span className='text-red-500 capitalize'>network access</span>. We recommend to put your server IP address to maintain the security. Also you can set it public access, which is not recommended.
                                    <img className='h-auto w-auto my-4' src="/images/altas2.png" alt="" />
                                </li>
                                <li className='my-4'>Now you have to click <span className='text-red-500'>Database Access</span> to create new database user. You can simply put username and password to create database user. Please remember the username and password.
                                    <img className='h-auto w-auto my-4' src="/images/altas1.png" alt="" />
                                </li>
                                <li className='my-4'>Now click on <span className='text-red-500'>Database</span>. Next click on <span className='text-red-500'>Connect</span>
                                    <img className='h-auto w-auto my-4' src="/images/s6.png" alt="" /></li>

                                <li className='my-4'>Next click on <span className='text-red-500'>Connect using MongoDB Compass.</span>
                                    <img className='h-auto w-auto my-4' src="/images/s7.png" alt="" />
                                </li>
                                <li>You will get a collection URL like below, you have to give the database username and password that you previously created in <span className='text-red-500'>Database Access step.</span>
                                    <img className='h-auto w-auto my-4' src="/images/s5.png" alt="" />
                                </li>
                                <li>Right now, Your Database creation process is done. Just copy the URL from your mongoDB atlas account like the upper image. Now you have to paste the URL in <span className='text-red-500'>Database String</span> field. Also you have to put company website name like taxstick.</li>
                        <img className='h-auto w-auto my-2' src="/images/s2.png" alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>JWT Information</h5>
                    <div className='m-4'>
                        <p>JWT means JSON Web Token. This token is used to secure your website.</p>
                        <ul className='list-disc'>
                            <li>First of all you have to fill JWT secret key. You can generate the secret key from <Link href="http://www.sha1-online.com/"><a target='_blank' rel="opener" >here</a></Link>. Now you have to put any value to generate the secret key(hash value). Now copy the secret value and paste it in JWT secret key field.</li>
                            <li>Jwt Expire time: Now you have to set JWT expire time  like 1h or 5h (A maximum of 24h should be given).
                            </li>
                            <li>Jwt Expire in Remember me option: In the case of log in section if you want to activate the remember me option just put expire time like 365h.</li>
                        </ul>
                        <img className='h-auto w-auto' src="/images/s3.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>AWS Bucket Information</h5>
                    <div className='m-4'>
                        <p>Please fill out proper AWS bucket information. <Link href='https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-bucket-key.html'><a target='_blank' rel="opener" >Click Here for proper instructions</a></Link></p>
                        <img className='h-auto w-auto' src="/images/s4.png" alt="" />
                    </div>
                </div>
                <div className='my-4 shadow p-4'>
                    <p className='text-red-500 font-semibold mb-0'>After completion this process you have to restart the server.</p>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Server Restart</h5>
                    <div className='m-4'>
                        <p>Go to your cPanel or server panel. Click your backend folder.</p>
                        <img className='h-auto w-auto' src="/images/restart1.png" alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Then you will get this kind of pop up, follow the instructions in the picture.</p>
                        <img className='h-auto w-auto' src="/images/restart2.png" alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Then click on the Restart button.</p>
                        <img className='h-auto w-auto' src="/images/restart3.png" alt="" />
                    </div>
                    <div className='my-4 shadow p-4'>
                        <p className='text-red-500 font-semibold mb-0'>Then go to your website and reload this page. Then you can see your home page.</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Setting;