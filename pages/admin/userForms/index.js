import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const UserFormsFields = () => {
    const router = useRouter();

    const handleRouteChange = () => {
        router.push('userForms/commonField/')
    }
    const handleTermsRouteChange = () => {
        router.push('userForms/termCon/')
    }

    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='border-b-[1px] border-black text-center p-2 text-[20px]'>User Forms Feilds</h5>
                <p>We have provided our users with a complete dynamic form system. Dynamic form field means any admin can add/delete any type of form field required for his work. But for this application, this system is used to manage user form data collection fields. Because we have given complete freedom to the admin to create his user roles because the admin will define the user roles as per his requirement, in the case of role-based data collection, he will need different form fields. However, for the convenience of the admin, we have added some common form fields by default, which can be viewed by clicking on <span className='text-red-500 font-bold italic '>view common fields </span> button. However, for information collected from the mentioned user, we have arranged 3 steps, the first and second step is information, for which the frame field has to be determined from here, third or last step includes payment.</p>
                <p className='text-[18px] font-medium'>Below is the description of the working process for the complete section :</p>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <h5 className='inline'>User Forms Feilds Select User option : </h5>
                        <p className='inline'>In this section, the administrator must first select a role to view the visible common form fields.</p>
                        <img className='h-auto w-auto my-2' src="/images/userForm4.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>Role wise User Forms Feilds : </h5>
                        <p className='inline'>Here, admin can see list of form fields added by default for first 2 steps in 2 tables.The table contains role name, data collection type, time added, required information, status, information about whether this field will be visible in the PDF/Excel file and delete option (if someone deletes a field from this table, it is for this particular role will be deleted, not deleted from another role if the common field is included).</p>
                        <img className='h-auto w-auto my-2' src="/images/userForm.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>View Common Forms Feilds button : </h5>
                        <p className='inline'>In the description above, I mentioned this list of form fields earlier, with this list, we initially gave a general list of any type of data collection field that a form can contain. Now you will see 30 common form fields, which are commonly used. If these fields apply to your data collection, you can use them, or create additional fields . Note that if you delete a field from now on, that field will be deleted from all roles.</p>
                        <img className='h-auto w-auto my-2' src="/images/viewFormfield.png" alt="" />
                        <div className='bg-red-500  rounded p-4'>
                            <h5 className='inline text-white'>We have provided some common form feild data, this data needs to be placed in the database before following the next step. </h5>
                            <p className='inline text-white border-2 border-white rounded px-4 py-2 cursor-pointer' onClick={handleRouteChange}>
                                Click Here</p>
                        </div>
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>Add New feilds : </h5>
                        <p className='inline' >When the admin clicks on Add New Field, he will see a drawer through which a new form field can be created. </p>
                        <p className='font-medium mt-4 mb-0'>Method of use:</p>
                        <ul className='list-disc'>
                            <li>First, you need to select a specific role .
                                <img className='h-auto w-auto m-2' src="/images/addfeild.png" alt="" />
                            </li>
                            <li>Then, you have to name a field input.
                                <img className='h-auto w-auto m-2' src="/images/name.png" alt="" />
                            </li>
                            <li>Then, you have to select a field input type.
                                <img className='h-auto w-auto m-2' src="/images/type.png" alt="" />
                                <p className='mt-4 mb-0'>While defining the input field you need to follow some information below:</p>
                                <ul className='list-disc'>
                                    <li>We have included 14 types of field types in this list.they are ,Number,
                                        <ul className='list-disc'>
                                            <li>Text: It collects string values</li>
                                            <li>Boolean : It collects true/false value.</li>
                                            <li>File: It collects any type of document(pdf/excell/word etc)</li>
                                            <li>Number: It collects number value.</li>
                                            <li>Password : It collests password.</li>
                                            <li>Textarea :Through this, a lot of data can be taken at once</li>
                                            <li>Images: It collects images</li>
                                            <li>Date : It collects dates</li>
                                            <li>Time :It collects time </li>
                                            <li>Switch : It collects yes/no types data.</li>
                                            <li>Digital Signature : It collects degital hand writing signature</li>
                                            <li>Select :It collects multiple data sets for a particular field.
                                                <div className='md:grid md:grid-cols-2'>
                                                    <img className='h-auto w-auto m-2' src="/images/select1.png" alt="" />
                                                    <img className='h-auto w-auto m-2' src="/images/select2.png" alt="" />
                                                </div>
                                            </li>
                                            <li>Radio Button: It is similar to Select, only the data has to be selected with a radio button click</li>
                                            <li>Checkbox : Additional links can be added within this field
                                                <img className='h-auto w-auto m-2' src="/images/checkbox.png" alt="" />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Input Placeholder: You need to specify what messages you want the audience to see
                                <img className='h-auto w-auto m-2' src="/images/placeholder.png" alt="" />
                            </li>
                            <li>Input Placeholder: If a field value is required, it must be selected as true here .
                                <img className='h-auto w-auto m-2' src="/images/reguire.png" alt="" />
                            </li>
                            <li>Status: It collection current status.
                                <img className='h-auto w-auto m-2' src="/images/status.png" alt="" />
                            </li>
                            <li>Step: You must specify which step field you are defining.
                                <img className='h-auto w-auto m-2' src="/images/step.png" alt="" />
                            </li>
                            <li>Select Action: This field should be common or specific .
                                <img className='h-auto w-auto m-2' src="/images/action.png" alt="" />
                            </li>
                        </ul>
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>Terms and Conditions : </h5>
                        <p className='inline'>If you want to add terms and condition option to your userform, please Follow the process</p>
                        <p className='inline text-red-600 mx-4 border-2 border-red-500 rounded px-4 py-2 cursor-pointer font-bold' onClick={handleTermsRouteChange}>
                            Click Here</p>
                    </li>
                </ul>
            </div>
        </AdminLayout>
    );
};

export default UserFormsFields;