import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import HeaderLeftSideMenu from "src/components/header/HeaderLeftSideMenu";
import HeaderSearchMobileBar from "src/components/header/HeaderSearchBarMobile";
import Container from "../container/Container";

function HeaderMenuMobile(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
    
    return (
        <div className="flex items-center">
            <button className="md:hidden p-3 relative" onClick={() => setIsOpen(true)}>
                <VscThreeBars className="text-white text-2xl" />
            </button>
            <button className="md:hidden p-3 relative" onClick={() => setIsSearchBarOpen(true)}>
                <AiOutlineSearch className="text-white text-2xl" />
            </button>

            {/* LEFT SIDE MENU ON MOBILE */}
            <HeaderLeftSideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* SEARCH BAR ON MOBILE */}
            {isSearchBarOpen &&
                <Container properties={["search-bar-mobile", "p-3", "md:hidden", "flex", "items-center", "justify-between", "z-20"]}>
                    <HeaderSearchMobileBar setIsSearchBarOpen={setIsSearchBarOpen}/>
                    <button className="ml-4 p-1 rounded-full bg-gray-blur" onClick={() => setIsSearchBarOpen(false)}>
                        <MdClose className="text-xl text-tx-2" />
                    </button>
                </Container>
            }
        </div>
    );
}

export default HeaderMenuMobile;