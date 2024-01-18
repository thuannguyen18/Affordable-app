import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaRegUser, FaRegQuestionCircle } from "react-icons/fa";
import { FiShoppingCart, FiBell, FiLogOut, FiShoppingBag } from "react-icons/fi";
import { PiHouse } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { toggle } from "src/redux/formSlice";
import HeaderAuthPopup from "src/components/header/HeaderAuthPopup";
import HeaderRightSideMenu from "src/components/header/HeaderRightSideMenu";

const USER_DROPDOWN_MENU_ITEMS = [
    {
        title: "User Profile",
        icon: <FaRegUser />,
        to: "/",
    },
    {
        title: "Orders",
        icon: <FiShoppingBag />,
        to: "/",
    },
    {
        title: "Help Center",
        icon: <FaRegQuestionCircle />,
        to: "/",
    },
    {
        title: "Sign Out",
        icon: <FiLogOut />,
        to: "/",
    },
];

function HeaderUserShortcut(): JSX.Element {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="md:ml-6 flex items-center">
            {/* HOME PAGE BUTTON */}
            <Link to="/" className="hidden relative rounded-lg text-white hover:bg-gray-100 transition md:block md:px-4 md:py-2 md:flex md:items-center ">
                <PiHouse className="mr-2 text-2xl text-white" />
                <span className="text-white text-sm">Home</span>
            </Link>

            {/* LOGIN AND REGISTER BUTTON */}
            <div className="user-shortcut-container hidden md:mr-6 md:block">
                <button
                    className="relative rounded-lg hover:bg-gray-100 transition  md:block md:px-4 md:py-2 md:flex md:items-center "
                    onClick={() => dispatch(toggle())}
                >
                    <FaRegUserCircle className="mr-2 text-2xl text-white" />
                    <span className="text-white text-sm">Account</span>
                    <div className="user-dropdown-menu">
                        {USER_DROPDOWN_MENU_ITEMS.map(item => (
                            <Link key={item.title} to={item.to} className="flex items-center py-2 px-4 text-left hover:bg-gray-blur">
                                <span className="mr-2">
                                    {item.icon}
                                </span>
                                <span className="text-sm text-title">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </button>
                <span className="vertical-line-user-shortcut hidden md:block"></span>
                <HeaderAuthPopup />
            </div>

            {/* NOTIFICATION BUTTON */}
            <button className="hidden md:p-2.5 relative rounded-lg hover:bg-gray-100 transition md:block">
                <FiBell className="text-xl text-white" />
                <span className="user-bell-notification"></span>
            </button>

            {/* CART BUTTON */}
            <Link to="/checkout" className="p-3 relative rounded-lg md:hover:bg-gray-100 transition">
                <FiShoppingCart className="relative left-[-1px] text-2xl text-white md:text-xl" />
                <span className="user-cart-notification"></span>
            </Link>

            {/* USER BUTTON ON MOBILE */}
            <button
                className="p-3 relative rounded-lg md:hover:bg-gray-100 transition md:hidden"
                onClick={() => setIsOpen(true)}
            >
                <FaRegUser className="text-xl text-white"/>
            </button>
            {false && <HeaderRightSideMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
}

export default HeaderUserShortcut;