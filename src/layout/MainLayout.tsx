import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer/Footer";

function MainLayout(): JSX.Element {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    return (
        <Fragment>
            <Header />
            <Outlet />
            {!isHomePage && <Footer />}
        </Fragment>
    );
}

export default MainLayout;