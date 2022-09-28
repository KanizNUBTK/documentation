import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import Link from 'next/link'
import { Fragment, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from 'next/router'


const Sidebar = ({ menu }) => {
    const router = useRouter();

    const { pathname } = useRouter()
    const isActive = (item) => {
        if (item?.href === pathname || item?.childHrefs?.includes(pathname)) {
            return true
        }
        let find = item?.child?.find(child => child.href === pathname || child?.childHrefs?.includes(pathname))
        return !!find
    }

    const [update, setUpdate] = useState()
    useEffect(() => {
        setUpdate(!update)
        document.querySelectorAll('.metismenu .sub-menu')?.forEach(menu => {
            menu?.childNodes?.forEach(child => {
                let item = child.childNodes[0]
                if (item.href === window.location.href) {
                    if (!menu.classList.contains('mm-show')) {
                        menu.classList.add('mm-show')
                    }
                }
            })
        })

    }, [pathname])

    // sidebar manu control, responsive
    const removeMenu = () => {
        try {
            if (window.innerWidth < 1024) {
                document.querySelector('.dashboard')?.classList.remove('mini')
                document.querySelector('.dashboard')?.classList.remove('mobile')
            }
        } catch (e) {

        }
    }

    // handle logout
    const handleLogout = async () => {
        let { isConfirmed } = await swalAlert.confirm(
            "Are you want to leave?",
            "Yes, Leave"
        );
        if (isConfirmed) {
            localStorage.removeItem("taxantsToken");
            router.push("https://taxants.tk/login/");
        }
    }

    return (
        <>
            <div className="sidebar-bg" onClick={removeMenu} />
            <nav className="sidebar">
                <div className='sidebarBg pb-10'>
                    <div className="h-16 pt-3 flex justify-center c_logo items-center text-gray-300">
                        <img src='/images/logo-new.png' alt="logo" className="inline-block" />
                    </div>

                    <div className='h-20 border-t border-b border-gray-500 flex items-center justify-center site-title'>
                        <img src='/images/admin_avatar.png' alt="image-profile" width={45} height={45}
                            className="inline-block" />
                        <span className='inline-block ml-3 text-gray-300 font-semibold'>Welcome Admin</span>
                    </div>

                    <MetisMenu>
                        {menu?.map((item, index) => {
                            let Icon = item.icon || Fragment
                            return (
                                <li className={`${isActive(item) ? 'mm-active active' : ''}`} key={index}>
                                    {item?.child ? (
                                        <>
                                            <a className={`nav-item has-arrow ${isActive(item) ? item?.child?.length > 0 ? 'p-active' : 'active' : ''}`}>
                                                <Icon className="inline-block" />
                                                <span>{item.label}</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="label">{item.label}</li>
                                                {item?.child?.map((child, index) => {
                                                    let Icon = child.icon || Fragment
                                                    return (
                                                        <li key={index}>
                                                            <Link href={child.href || '#!'}>
                                                                <a onClick={removeMenu}
                                                                    className={`nav-item ${isActive(child) ? 'active' : ''}`}>
                                                                    <Icon className="inline-block mb-0.5" />
                                                                    <span 
                                                                     className={`${index+500}`}
                                                                    > {child.label}</span>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link href={item.href || '#!'}>
                                            <a className={`nav-item ${isActive(item) ? 'active' : ''}`} onClick={() => {
                                                document.querySelectorAll('.metismenu .sub-menu')?.forEach(menu => {
                                                    menu.classList.remove('mm-show')
                                                })
                                                removeMenu()
                                            }}>
                                                <Icon className="inline-block mb-0.5" />
                                                <span className="c-tooltip">{item.label}</span>
                                            </a>
                                        </Link>
                                    )}

                                </li>
                            )
                        })}
                    </MetisMenu>

                    {/* logout */}
                    <Link href="">
                        <a className="pl-10 ml-1 hover:text-gray-50  text-gray-200 text-[15px] hover:translate-x-1 inline-block transition duration-500 c_logout" onClick={handleLogout}>
                            <FaSignOutAlt className="inline-block mr-1 text-[20px] logout_icon" />
                            <span
                                className="inline-block ml-1"
                            >
                                <span className='logout_text'>Logout</span>
                            </span>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}


export default Sidebar