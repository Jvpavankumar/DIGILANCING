import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Headset, Package, Award, Network, X,
    Users, FileText, Link2, BarChart2, Monitor, BookOpen, CreditCard, UserCheck
} from 'lucide-react'; // added relevant icons
import hover from '../../User/Assets/hover.svg';

const AfLeftNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { path: "/AffiliatePanel", key: "DashBoard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5 mr-2" /> },
        { path: "/Offers", key: "Offers", label: "Offers", icon: <Package className="w-5 h-5 mr-2" /> },
        { path: "/Acheivements", key: "acheivements", label: "Acheivements", icon: <Award className="w-5 h-5 mr-2" /> },
        { path: "/Marketing Tools", key: "marketingtools", label: "Marketing Tools", icon: <Network className="w-5 h-5 mr-2" /> },
        { path: "/Training", key: "training", label: "Training", icon: <Monitor className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/Webinar", key: "webinar", label: "Webinar", icon: <Headset className="w-5 h-5 mr-2" /> }, // keep headset
        { path: "/Kyc", key: "kyc", label: "Kyc", icon: <UserCheck className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/LinkGenerator", key: "linkgenerator", label: "Link Generator", icon: <Link2 className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/Referal Details", key: "referaldetails", label: "Referal Details", icon: <Users className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/Qualification", key: "qualification", label: "Qualification", icon: <BookOpen className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/Earning", key: "earning", label: "Earning", icon: <BarChart2 className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/PayoutDetails", key: "payoutdetails", label: "Payout Details", icon: <CreditCard className="w-5 h-5 mr-2" /> }, // changed icon
        { path: "/LeaderBoard", key: "leaderboard", label: "LeaderBoard", icon: <Award className="w-5 h-5 mr-2" /> }, // keep award
    ];

    const getActiveMenu = () => {
        const found = menuItems.find(item => item.path === location.pathname);
        return found ? found.key : null;
    };

    const [activeMenu, setActiveMenu] = useState(getActiveMenu);

    useEffect(() => {
        setActiveMenu(getActiveMenu());
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen, location]);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger Button for small/medium screens */}
            {!isOpen && (
                <div className="fixed top-4 left-2 z-[60] lg:hidden"> {/* z-[60] > z-50 */}
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-white rounded-lg bg-[#003B73] hover:bg-[#014170] focus:outline-none focus:ring-2 focus:ring-[#002B54]"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* Sidebar */}
            <aside
                id="sidebar"
                className={`fixed top-0 left-0 z-60 h-screen transition-transform transform
    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
    lg:top-[2vh] lg:left-2 lg:w-64 lg:h-[96vh] lg:translate-x-0
    ${isOpen ? 'rounded-none' : 'lg:rounded-3xl'} lg:rounded-3xl
    w-[50vw] max-w-sm`}
            >

                <div className="h-full bg-[#003B73] text-white shadow-xl flex flex-col lg:rounded-3xl rounded-none p-1">
                    {/* Logo */}
                    <div className="flex items-center justify-between h-16 px-2">
                        <span className="text-xl font-semibold text-white ml-1">DIGI LANCING</span>
                        <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-100 lg:hidden">
                            <X className="w-5 h-5 mt-1" />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col justify-between flex-grow py-2">
                        <ul className="flex flex-col flex-grow">
                            {menuItems.map(({ path, key, label, icon }) => (
                                <li
                                    key={key}
                                    className="relative mb-4 md:mb-1"
                                >
                                    {activeMenu === key && (
                                        <img
                                            src={hover}
                                            alt="active background"
                                            className="absolute inset-0 w-full h-full object-cover rounded-md"
                                        />
                                    )}
                                    <Link
                                        to={path}
                                        className={`relative flex items-center text-xs sm:text-sm md:text-base font-medium 
          py-1 sm:py-2 md:py-2.5 px-3 rounded-md z-10  ${activeMenu === key ? 'text-white' : ''
                                            }`}
                                    >
                                        {icon}
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>

            {isOpen && (
                <div
                    id="overlay"
                    className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default AfLeftNav;
