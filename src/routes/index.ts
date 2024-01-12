import Home from "../pages/HomePage/Home";
import Checkout from "../pages/CheckoutPage/Checkout";
import Search from "../pages/SearchPage/Search";

interface Routes {
    path: string;
    component: React.FunctionComponent;
}

const publicRoutes: Routes[] = [
    { path: "/", component: Home },
    { path: "/search", component: Search },
    { path: "/checkout", component: Checkout },
];

const privateRoutes: Routes[] = [];

export { publicRoutes, privateRoutes };