import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import AdminLayout from '../../../layout/adminLayout';

const TermsAndCondision = () => {
    const router = useRouter();
    const handleRouteChange = () => {
        router.push('/admin/userForms/')
    }
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <p onClick={handleRouteChange} className='flex items-center gap-2 cursor-pointer text-red-600'><span className='mt-1'><BsArrowReturnLeft /></span> Back</p>
                <h5 className='border-b-[1px] border-black text-center p-2 text-[20px]'>Common Feilds Data Insert Process</h5>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <p >In this case, the complete procedure for creating a new form field will be the same, only the <span className='font-bold text-red-600'>input name and input type </span>  should be selected as shown in the image below. Then you will see a field with the <span className='font-bold text-red-600'>Add Link</span> sign part, in this option copy and paste the link of your website terms and condition page.</p>
                        <img className='h-auto w-auto my-2' src="/images/terms_and_conditions.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >But first, you need to assign terms to your company, which you do from the <span className='font-bold text-red-600 flex items-center'>Website Settings <MdOutlineKeyboardArrowRight /> Frontend page</span>, and this page can be found under <span className='font-bold text-red-600'>More</span> Options on your website.</p>
                        <img className='h-auto w-auto my-2' src="/images/tc1.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p>Then go to the page and copy the URL into the browser address bar .</p>
                        <img className='h-auto w-auto my-2' src="/images/tc2.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p>After completing all the process you will successfully execute your terms and conditions.</p>
                        <img className='h-auto w-auto my-2' src="/images/terms_link.png" alt="" />
                    </li>
                </ul>
            </div>
        </AdminLayout>
    );
};

export default TermsAndCondision;