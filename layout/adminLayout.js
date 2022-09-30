import {
    MdDashboard, MdEditNote, MdRule,
    MdOutlineCenterFocusStrong, MdAccountCircle, MdPowerSettingsNew, MdLocationOn,
    MdCode, MdAnnouncement, MdSettings, MdInsertChart, MdFeedback
} from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiPagesFill } from "react-icons/ri";
import { FaQuestionCircle, FaTools } from "react-icons/fa";
import Sidebar from "../components/dashboard/sidebar.js";
import Header from "../components/dashboard/header.js";
import { TiContacts } from "react-icons/ti";


const AdminLayout = ({ children }) => {

    const menu = getMenu()

    return (
        <div className="dashboard">
            <Sidebar menu={menu} />
            <Header />
            <div className="absolute top-0 h-32 w-full " />
            <div className="main-content ">
                <div className="w-full z-30" style={{ minHeight: 400 }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;


const menu = [
    
    {
        label: 'Instruction',
        icon: MdAnnouncement,
        child: [
            {
                label: 'Server Requirement',
                icon: MdEditNote,
                href: '/instruction/server',
            },
            {
                label: 'Installation Process',
                icon: MdRule,
                href: '/instruction/install',
            },
            {
                label: 'Manual Installation',
                icon: MdRule,
                href: '/instruction/manual',
            },
            {
                label: 'Update Process',
                icon: MdRule,
                href: '/instruction/update',
            },
            {
                label: 'Localhost Process',
                icon: MdRule,
                href: '/instruction/localhost',
            },
        ]
    },
    {
        label: 'Admin Panel',
        icon: MdSettings,
        child: [
            {
                label: 'Admin Login',
                icon: TiContacts,
                href: '/admin/login',
            },
            {
                label: 'Admin Profile Setting',
                icon: TiContacts,
                href: '/admin/profile',
            },
            {
                label: 'User Forms Feilds',
                icon: TiContacts,
                href: '/admin/userForms',
            },
            {
                label: 'User ',
                icon: TiContacts,
                href: '/admin/user',
            },
            {
                label: 'Province ',
                icon: TiContacts,
                href: '/admin/province',
            },
            {
                label: 'Coupon ',
                icon: TiContacts,
                href: '/admin/coupon',
            },
            {
                label: 'Admin Tax Feilds',
                icon: TiContacts,
                href: '/admin/allFiles',
            },
            {
                label: 'Role And Permission',
                icon: TiContacts,
                href: '/admin/rolePermission',
            },
            {
                label: 'Website Setting',
                icon: TiContacts,
                href: '/admin/landingPage',
            },
        ]
    },
    {
        label: 'Accountant Panel',
        icon: MdSettings,
        child: [
            {
                label: 'Accountant Login',
                icon: TiContacts,
                href: '/accountant/login',
            },
            {
                label: 'Accountant ALl Files',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
        ]
    },
    {
        label: 'User Panel',
        icon: MdSettings,
        child: [
            {
                label: 'User Login',
                icon: TiContacts,
                href: '/user/login',
            },
            {
                label: 'User Form Fill Up Process',
                icon: TiContacts,
                href: '/user/form',
            },
            {
                label: 'My Tax File',
                icon: TiContacts,
                href: '/user/mytaxFile',
            },
            {
                label: 'File Form A/C and Feedback',
                icon: TiContacts,
                href: '/user/fileAC',
            },
        ]
    },
]


const getMenu = () => {
    return menu;
}
