import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import logo from "src/assets/images/logo.png";
import Container from "../container";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderUserShortcut from "./HeaderUserShortcut";
import HeaderMenuMobile from "./HeaderMenuMobile";
import HeaderQuickLinks from "./HeaderQuickLinks";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header className=" bg-white">
            {/* TOP HEADER  */}
            <div className="bg-primary">
                <Container properties={["flex", "justify-between", "items-center", "md:p-3"]}>
                    {/* HEADER ICON MENU ON MOBILE */}
                    <HeaderMenuMobile />

                    {/* HEADER LOGO */}
                    <Link to="/" className="justify-items-center">
                        <img src={logo} alt="logo" />
                    </Link>

                    {/* HEADER SEARCH BAR ON PC*/}
                    <HeaderSearchBar />

                    {/* HEADER USER SHORTCUT */}
                    <HeaderUserShortcut />
                </Container>
            </div>

            {/*  BOTTOM HEADER ON PC */}
            <Container properties={["bg-primary", "md:flex", "md:items-center", "md:justify-between", "md:p-3", "md:bg-white"]}>
                {/* HEADER QUICK LINK */}
                <HeaderQuickLinks />

                {/* HEADER DELIVER TO */}
                <div className="hidden lg:flex item-center">
                    <GrLocation className="text-gray text-lg" />
                    <span className="text-gray text-sm ml-1 mr-2">Deliver to:</span>
                    <span className="text-sm underline">720/6 Pastuer, P.14, Q.TB, TP.HCM</span>
                </div>
            </Container>
        </header>
    );
}

export default Header;