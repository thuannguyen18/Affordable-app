import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout, MdClose } from "react-icons/md";

type Props = {
    isOpen: boolean;
    setIsOpen: any;
}

function HeaderRightSideMenu({ isOpen, setIsOpen }: Props): JSX.Element {
    if (!isOpen) {
        return <span></span>
    }

    return (
        <div className="right-side-modal bg-modal fixed inset-0">
            <div className="right-side-menu">
                {/* GREETING */}
                <div className="pt-6 px-4 pb-4 bg-primary flex items-center justify-between">
                    <span>
                        <h2 className="text-lg text-white">Hello, Thuan</h2>
                        <h3 className="text-xl text-white">Your Account</h3>
                    </span>
                    <button className="p-2" onClick={() => setIsOpen(false)}>
                        <MdClose className="text-3xl text-white" />
                    </button>
                </div>

                {/* PROFILE */}
                <div className="p-4 bg-white">
                    <span className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Profile</h2>
                        <button className="border border-primary rounded p-1.5 text-xs text-primary">See all</button>
                    </span>
                    <span className="mt-3 flex items-center">
                        <span className="mr-2">
                            <FaRegUserCircle className="text-4xl" />
                        </span>
                        <span>
                            <h2 className="text-sm font-semibold">Thuan Nguyen</h2>
                            <p className="text-xs">nguyenmthuan18@gmail.com</p>
                        </span>
                    </span>
                </div>

                {/* ORDERS */}
                <div className="p-4 bg-white mt-2">
                    <span className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Your Orders</h2>
                        <button className="border border-primary rounded p-1.5 text-xs text-primary">See all</button>
                    </span>
                    <ul>
                        <li className="py-3.5">
                            <Link to="/">Track & Manage Your Orders</Link>
                        </li>
                        <li className="py-3.5">
                            <Link to="/">Buy Again</Link>
                        </li>
                        <li className="py-3.5">
                            <Link to="/">Return & Replacements</Link>
                        </li>
                        <li className="py-3.5">
                            <Link to="/">Address</Link>
                        </li>
                    </ul>
                </div>

                {/* HELP CENTER */}
                <div className="p-4 bg-white mt-2">
                    <h2 className="text-lg font-semibold">Help Center</h2>
                    <ul>
                        <li className="py-3.5">
                            <Link to="/">Custom Service</Link>
                        </li>
                    </ul>
                </div>

                {/* SIGN OUT */}
                <div className="p-4 bg-white mt-2 flex items-center">
                    <span className="mr-1">
                        <MdOutlineLogout className="text-xl" />
                    </span>
                    <button className="flex-1 px-1 py-2 text-left">Sign Out</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderRightSideMenu;