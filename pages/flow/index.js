import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const WorkFlow = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='text-center text-[20px] font-bold'>Work flow</h5>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 1</h5>
                    <p>A user has to fill out the form in 3 steps:</p>
                    <ul className='list-decimal'>
                        <li>About you,</li>
                        <li>Income summary,</li>
                        <li>Payment</li>
                    </ul>
                    <p>When a user starts filling out the form, the admin can see in this column how many steps he has completed</p>
                    <img className='h-auto w-auto' src="/images/flow1.png" alt="" />
                    <p className='mt-4'>And the user can also see his steps if he wants</p>
                    <img className='h-auto w-auto' src="/images/submission1.png" alt="" />
                    <p className='shadow p-4 text-bold m-2'>If the administrator wants, the user can hand over his file to the accountant before completing his payment.</p>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 2</h5>
                    <p>Admin can assign a file to an accountant and can assign multiple files at once and the status column will show you the status change from <span className='text-red-500'>New File</span>  to <span className='text-red-500'>Submit to Accountant</span>.</p>
                    <img className='h-auto w-auto' src="/images/flow2.png" alt="" />
                    <p className='mt-4'>Accountant can see the newly added file in his panel and start working.</p>
                    <img className='h-auto w-auto' src="/images/flow3.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 3</h5>
                    <p>When the accountant completes the work he submits the file.When he sends the file to the user, the administrator, user, and accountant will also receive a submission email. Using <span className='text-red-500'>Send file</span> column</p>
                    <img className='h-auto w-auto' src="/images/flow4.png" alt="" />
                    <p className='mt-4'>And user will see the file in his panel, he can take review if he wants but maximum 2 times can request for review.</p>
                    <img className='h-auto w-auto' src="/images/file2.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 4</h5>
                    <p>If a user wants a review, then the admin and the accountant who worked on the file will see them in the status column of the table, but in this case, the admin will determine the accountant for the review. Only the accountant who assigns the review file to the admin can work</p>
                    <img className='h-auto w-auto' src="/images/flow5.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default WorkFlow;