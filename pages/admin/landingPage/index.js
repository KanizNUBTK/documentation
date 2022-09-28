import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const LandingPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-10 w-[90%] text-[16px] p-10'>
                <p>First you need to go to the admin panel , website setting,site setting, then you will see four buttons on the left side and on the right side there is a form . At first you can see website information. Then Home page information, then About page and at last Tax situation page. You can insert, update and delete data from this page.</p>
                <img className='h-[500px]' src="/images/site.png" alt="" />
                <p>At the top of the page, you will find the form to add questions and answers for your clients and at the bottom of the page all the questions and answers will be displayed, you can delete any row.
                </p>
                <img className='h-[500px]' src="/images/faq.png" alt="" />
                <p>On this page you can add an additional page for your website, where you can specify the menu or footer to display. You can also delete and update data
                </p>
                <img className='h-[500px]' src="/images/more.png" alt="" />
                <p>On the TaxFile pricing page, you can add tax pricing depending on the user role, Stripe, Paypal,Razorpay,Mollie, You can take your payment through these 4 channels
                </p>
                <img className='h-[500px]' src="/images/tax.png" alt="" />
                <p>
                    If any viewer has any type of query, they have to email you, this email can store on this page of your admin panel, the admin can view and reply to the email and also can delete this
                </p>
                <img className='h-[500px]' src="/images/query.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default LandingPage;