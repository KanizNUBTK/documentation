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
            <div className="absolute top-0 h-32 w-full bg-main border" />
            <div className="main-content bg-[#EEEEEE]">
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
                icon: MdFeedback,
                href: '/admin/login',
            },
            {
                label: 'Admin Profile Setting',
                icon: TiContacts,
                href: '/admin/profile',
            },
            {
                label: 'User Forms Feilds',
                icon: AiFillDollarCircle,
                href: '/admin/user-forms',
            },
            {
                label: 'Admin Tax Feilds',
                icon: RiPagesFill,
                href: '/admin',
            },
            {
                label: 'Coupon',
                icon: FaQuestionCircle,
                href: '/admin',
            },
            {
                label: 'Role And Permission',
                icon: FaTools,
                href: '/admin',
            },
            {
                label: 'Website Setting',
                icon: FaTools,
                href: '/admin/landingPage',
            },
        ]
    },
    {
        label: 'Accountant Panel',
        icon: MdSettings,
        child: [
            {
                label: 'Admin Login',
                icon: MdFeedback,
                href: '/admin/login',
            },
            {
                label: 'Admin Profile Setting',
                icon: TiContacts,
                href: '/admin/profile',
            },
            {
                label: 'User Forms Feilds',
                icon: AiFillDollarCircle,
                href: '/admin/user-forms',
            },
            {
                label: 'Admin Tax Feilds',
                icon: RiPagesFill,
                href: '/admin',
            },
            {
                label: 'Coupon',
                icon: FaQuestionCircle,
                href: '/admin',
            },
            {
                label: 'Role And Permission',
                icon: FaTools,
                href: '/admin',
            },
            {
                label: 'Website Setting',
                icon: FaTools,
                href: '/admin',
            },
        ]
    },
]


const getMenu = () => {
    return menu;
}
