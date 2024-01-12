import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import HeaderQuickLinks from "./HeaderQuickLinks";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function HeaderLeftSideMenu({ isOpen, setIsOpen }: Props): JSX.Element {
    if (!isOpen) {
        return <span></span>
    }

    return (
        <div className="left-side-modal bg-modal fixed inset-0 z-10 md:hidden">
            <div className="left-side-menu">
                {/* BROWSE */}
                <div className="pt-6 px-4 pb-4 bg-primary flex items-center justify-between">
                    <span>
                        <h2 className="text-lg text-white">Browse</h2>
                        <h3 className="text-xl text-white">Affordable</h3>
                    </span>
                    <button className="p-2" onClick={() => setIsOpen(false)}>
                        <MdClose className="text-3xl text-white" />
                    </button>
                </div>

                {/* BROWSE HOME */}
                <Link to="/" className="p-4 bg-white flex items-center justify-between">
                    <h3 className="font-semibold">Affordable Home</h3>
                    <span>
                        <PiHouse className="text-2xl" />
                    </span>
                </Link>

                {/* CATEGORY PRODUCTS */}
                <div className="bg-white mt-2 py-4 h-full">
                    <h4 className="p-3.5 font-semibold">Category Products</h4>
                    <HeaderQuickLinks />
                </div>
            </div>
        </div>
    );
}

export default HeaderLeftSideMenu;