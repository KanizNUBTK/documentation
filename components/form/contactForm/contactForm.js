import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;

const ContactForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    return (
        <div>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    remember: true,
                }}
            >
                <div className='flex gap-2'>
                    <Form.Item
                        name="firstname"
                        className='w-1/2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your firstname!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter First Name Here...' bordered={false} style={{ border: "2px solid #DF2F25" }} />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        className='w-1/2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastname!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter Last Name Here...'
                            bordered={false} style={{ border: "2px solid #DF2F25" }} />
                    </Form.Item>
                </div>

                <div className='flex gap-2'>
                    <Form.Item
                        name="email"
                        className='w-1/2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email'
                            }
                        ]}
                    >
                        <Input placeholder='Enter Email Here...' bordered={false} style={{ border: "2px solid #DF2F25" }} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        className='w-1/2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            }
                        ]}
                    >
                        <Input placeholder='Enter Phone Here...' bordered={false} style={{ border: "2px solid #DF2F25" }} />
                    </Form.Item>
                </div>
                <Form.Item
                    name="subject"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your subject!',
                        }
                    ]}
                >
                    <Input placeholder='Enter Subject Here...' bordered={false} style={{ border: "2px solid #DF2F25" }} />
                </Form.Item>

                <Form.Item
                    name="message"
                >
                    <TextArea placeholder='Write Message Here...' bordered={false} style={{ border: "2px solid #DF2F25" }} />
                </Form.Item>

                <div className='text-[#A7A7A7] flex justify-between items-center'>
                    <Form.Item>
                        <button type="submit" className='bg-[#F33527] hover:bg-[#DF2F25] text-base text-white px-6 py-2 rounded shadowHover'>
                            Submit
                        </button>
                    </Form.Item>
                </div>

            </Form>
        </div>
    );
};

export default ContactForm;