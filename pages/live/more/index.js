import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const MorePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>More Page</h4>
                <p>This section is a little different from the whole site because you can add more pages to your website according to your needs</p>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see page name.</p>
                        <img className='h-auto w-auto' src='/images/m1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Content</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see any type of text of the company, like career, terms, information, etc,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/m2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Pricing</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see tax pricing-related information acordion,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/p1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>FAQ</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see frequently asked questions list acordion,this seaction is also dynamic</p>
                        <img className='h-auto w-auto' src='/images/f1.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MorePage;