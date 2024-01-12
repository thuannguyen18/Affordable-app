import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import HeaderLeftSideMenu from "./HeaderLeftSideMenu";
import HeaderSearchMobileBar from "./HeaderSearchBarMobile";
import Container from "../Container/Container";

function HeaderMenuMobile(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
    
    return (
        <div className="flex items-center">
            <button className="md:hidden p-2.5 relative rounded-lg hover:bg-gray-100 transition" onClick={() => setIsOpen(true)}>
                <VscThreeBars className="text-white text-xl" />
            </button>
            <button className="md:hidden p-2.5 relative rounded-lg hover:bg-gray-100 transition" onClick={() => setIsSearchBarOpen(true)}>
                <AiOutlineSearch className="text-white text-xl" />
            </button>

            {/* LEFT SIDE MENU ON MOBILE */}
            <HeaderLeftSideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* SEARCH BAR ON MOBILE */}
            {isSearchBarOpen &&
                <Container properties={["search-bar-mobile", "py-3", "md:hidden", "flex", "items-center", "justify-between"]}>
                    <HeaderSearchMobileBar />
                    <button className="ml-4 p-1 rounded-full bg-gray-blur" onClick={() => setIsSearchBarOpen(false)}>
                        <MdClose className="text-xl text-tx-2" />
                    </button>
                </Container>
            }
        </div>
    );
}

export default HeaderMenuMobile;