import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Install = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Installing Process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Install</h5>
                    <div className='m-4'>
                        <ul className='list-disc'>
                            <li>First , You have to open Visual Studio Code, if you have no idea to intall Visual Studio Code <a href="https://code.visualstudio.com/" target='_blank' rel="noreferrer">Click here</a></li>
                            <li>Then, You have to clone or download the project, If you want to clone the project Click he box 1 or download the zip file click box 2.
                                <img className='h-auto w-auto' src="/images/i1.png" alt="" />
                            </li>
                            <p className='border-b-[1px] border-black my-4'>Backend</p>
                            <li>
                                If download Zip File,
                                <ul className='list-disc'>
                                    <li>First Extact the file and open it in Visual Studio Code.</li>
                                    <li>then open terminal window and give the command <span className='text-red-500 text-[20px]'>npm install -g yarn</span>, press enter,for intall yarn</li>
                                    <li>After yarn install, give <span className='text-red-500 text-[20px]'>yarn</span> command, press enter, for intall necessary modules and package</li>
                                    <li>After complete Installation, to run the project give<span className='text-red-500 text-[20px]'> yarn start </span>command, you project will run on your browser in http://localhost:3000/  port</li>
                                </ul>
                            </li>
                            <li>If you have to clone the project:
                                <ul className='list-disc'>
                                    <li>First you need to install git bash <a href="https://git-scm.com/downloads" target='_blank' rel="noreferrer">Click here to download Git bash</a></li>
                                    <li>After git bash install complete, you have to open Visual Studio Code and open the terminal window, then copy clone the project url and paste it with the command <span className='text-red-500 text-[20px]'> git clone (project url) </span>hit enter</li>
                                    <li>then open terminal window and give the command <span className='text-red-500 text-[20px]'>npm install -g yarn</span>, press enter,for intall yarn</li>
                                    <li>After yarn install, give <span className='text-red-500 text-[20px]'>yarn</span> command, press enter, for intall necessary modules and package</li>
                                    <li>After complete Installation, to run the project give<span className='text-red-500 text-[20px]'> yarn start </span>command, you project will run on your browser in http://localhost:3000/  port</li>
                                </ul>
                            </li>
                            <p className='border-b-[1px] border-black my-4'>Forentend</p>
                            <li>
                                If download Zip File,
                                <ul className='list-disc'>
                                    <li>First Extact the file and open it in Visual Studio Code.</li>
                                    <li>then open terminal window and give the command <span className='text-red-500 text-[20px]'>npm install -g yarn</span>, press enter,for intall yarn</li>
                                    <li>After yarn install, give <span className='text-red-500 text-[20px]'>yarn</span> command, press enter, for intall necessary modules and package</li>
                                    <li>After complete Installation, to run the project give<span className='text-red-500 text-[20px]'> yarn dev </span>command, you project will run on your browser in http://localhost:3000/  port</li>
                                </ul>
                            </li>
                            <li>If you have to clone the project:
                                <ul className='list-disc'>
                                    <li>First you need to install git bash <a href="https://git-scm.com/downloads" target='_blank' rel="noreferrer">Click here to download Git bash</a></li>
                                    <li>After git bash install complete, you have to open Visual Studio Code and open the terminal window, then copy clone the project url and paste it with the command <span className='text-red-500 text-[20px]'> git clone (project url) </span>hit enter</li>
                                    <li>then open terminal window and give the command <span className='text-red-500 text-[20px]'>npm install -g yarn</span>, press enter,for intall yarn</li>
                                    <li>After yarn install, give <span className='text-red-500 text-[20px]'>yarn</span> command, press enter, for intall necessary modules and package</li>
                                    <li>After complete Installation, to run the project give<span className='text-red-500 text-[20px]'> yarn dev </span>command, you project will run on your browser in http://localhost:3000/  port</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Install;