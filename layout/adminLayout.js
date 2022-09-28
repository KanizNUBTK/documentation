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
            <div className="absolute top-0 h-32 w-full bg-main" />
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
        label: 'Dashboard',
        icon: MdDashboard,
        href: '/admin',
        permission: 'dashboard'
    },
    {
        label: 'Live Site',
        icon: MdOutlineCenterFocusStrong,
        href: 'https://taxants.tk/',
    },
    {
        label: 'Admin Tax Files',
        icon: MdAccountCircle,
        href: '/admin/taxfiles',
    },
    {
        label: 'Student Fields',
        icon: MdPowerSettingsNew,
        href: '/admin/student-fields',
    },
    {
        label: 'Users',
        icon: MdAccountCircle,
        href: '/admin/users',
    },
    {
        label: 'Province',
        icon: MdLocationOn,
        href: '/admin/province',
    },
    {
        label: 'Coupon',
        icon: MdCode,
        href: '/admin/coupons',
    },
    {
        label: 'Roles & Permission',
        icon: MdAnnouncement,
        child: [
            {
                label: 'Roles',
                icon: MdEditNote,
                href: '/admin/roles',
            },
            {
                label: 'Permission',
                icon: MdRule,
                href: '/admin/permissions',
            },
        ]
    },
    {
        label: 'Website Setting',
        icon: MdSettings,
        child: [
            {
                label: 'Student Feedbacks',
                icon: MdFeedback,
                href: '/admin/setting/feedbacks',
            },
            {
                label: 'Customer Contact',
                icon: TiContacts,
                href: '/admin/setting/contacts',
            },
            {
                label: 'TaxFile Pricing',
                icon: AiFillDollarCircle,
                href: '/admin/setting/taxfile-pricing',
            },
            {
                label: 'FrontEnd Pages',
                icon: RiPagesFill,
                href: '/admin/setting/frontend-pages',
            },
            {
                label: 'FAQ Setting',
                icon: FaQuestionCircle,
                href: '/admin/setting/faq',
            },
            {
                label: 'Site Setting',
                icon: FaTools,
                href: '/admin/setting/site-setting',
            },
        ]
    },
]


const getMenu = () => {
    return menu;
}
