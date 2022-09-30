import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const LandingPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Website live page information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website bacis information</h5>
                    <div className='m-4'>
                        <p>First you need to go to the admin panel &gt; website setting &gt; site setting, then you will see seven buttons on the left side and on the right side there is a form.At first you can see website information.This form store compnay bacis information and the website domain name</p>
                        <img className='h-[500px]' src="/images/site.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website home page information</h5>
                    <div className='m-4'>
                        <p>This form takes live website main page information, This information will be display on the home page in the live website</p>
                        <img className='h-[500px]' src="/images/home.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website about page information</h5>
                    <div className='m-4'>
                        <p>This form takes your compnay information, This information will be display on the about page in the live website</p>
                        <img className='h-[500px]' src="/images/about.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Website tax situation page information</h5>
                    <div className='m-4'>
                        <p>This form takes the all user role information, This information will be display on the tax situation page in the live website</p>
                        <img className='h-[500px]' src="/images/situation.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website SMTP Information</h5>
                    <div className='m-4'>
                        <p>This form takes the Simple Mail Transfer Protocol (SMTP) information.</p>
                        <img className='h-[500px]' src="/images/smtp.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website SMS Information</h5>
                    <div className='m-4'>
                        <p>This form takes the twilo sms information.</p>
                        <img className='h-[500px]' src="/images/sms.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Website Environment Set Up </h5>
                    <div className='m-4'>
                        <p>This form takes the main environment set up information, This information stored in the .env file</p>
                        <img className='h-[500px]' src="/images/env.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>FAQs</h5>
                    <div className='m-4'>
                        <p>At the top of the page, you will find the form to add questions and answers for your clients and at the bottom of the page all the questions and answers will be displayed, you can delete any row.
                        </p>
                        <img className='h-[500px]' src="/images/faq.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>More Pages</h5>
                    <div className='m-4'>
                        <p>On this page you can add an additional page for your website, where you can specify the menu or footer to display. You can also delete and update data
                        </p>
                        <img className='h-[500px]' src="/images/more.png" alt="" />
                        <p className='mt-4'>Admin can write any type of content through this draft board</p>
                        <img className='h-[500px]' src="/images/draft.png" alt="" />
                        
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'> Tax pricing</h5>
                    <div className='m-4'>
                        <p>On the TaxFile pricing page, you can add tax pricing depending on the user role, Stripe, Paypal,Razorpay,Mollie, You can take your payment through these 4 channels
                        </p>
                        <img className='h-[500px]' src="/images/tax.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Query Pages</h5>
                    <div className='m-4'>
                        <p>
                            If any viewer has any type of query, they have to email you, this email can store on this page of your admin panel, the admin can view and reply to the email and also can delete this
                        </p>
                        <img className='h-[500px]' src="/images/query.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default LandingPage;