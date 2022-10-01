import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Setting = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Env File Setup Information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>.env File Setup Information</h5>
                    <div className='m-4'>
                        <p>After running the project, first, you will see a form, this form will collect information for the main backend .env file .</p>
                        <img className='h-auto w-auto' src="/images/setting.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Super Admin data collection</h5>
                    <div className='m-4'>
                        <p>In this section, the super admin or company owner will provide the basic information required to login into his website.</p>
                        <img className='h-auto w-auto' src="/images/s1.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Database information</h5>
                    <div className='m-4 '>
                        <p>Through this section, the name of the database and the name of the website will be collected. To store data you have to use the MongoDB database.
                            <ul className='list-disc'>
                                <li>At first, you have to open a MongoDB atlas account,<Link href="https://www.mongodb.com/atlas/database" >MongoDB database link</Link> </li>
                                <li>then you can open a collection,</li>
                                <li> then you can get a collection URL,in this URL, you have to give your database username and password.
                                    <img className='h-auto w-auto' src="/images/s5.png" alt="" />
                                </li>
                                <li> then you will get a collection URL that will be ready to use as a database string,
                                    After that, the URL can be placed in the input below</li>
                            </ul>
                        </p>
                        <img className='h-auto w-auto' src="/images/s2.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>JWT Information</h5>
                    <div className='m-4'>
                        <p>JWT means JSON Web Token.This token is used to secure your project.</p>
                        <ul className='list-disc'>
                            <li>Here give a random number that only the super admin can know,Here give a random number which only super admin can know, you can generate key through this link <a href="http://www.sha1-online.com/" target='_blank'>Click here</a></li>
                            <li>Jwt Expire time:These tokens will be valid for a certain period of time, after which all users will have to login again. Ex: 1 hour, 5hour(A maximum of 24 hours should be given)</li>
                            <li>Jwt Expire in Remember me: Here also a specific time is used, but in this case much more time is given, likes 365 hours.</li>
                        </ul>
                        <img className='h-auto w-auto' src="/images/s3.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>AWS Bucket Information</h5>
                    <div className='m-4'>
                        <p>AWS means Amazon Web Services.<Link href='https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-bucket-key.html'>Click Here for proper guide line</Link></p>
                        <img className='h-auto w-auto' src="/images/s4.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Setting;