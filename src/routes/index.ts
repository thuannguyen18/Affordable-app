import Home from "src/pages/HomePage/Home";
import Checkout from "src/pages/CheckoutPage/Checkout";
import Search from "src/pages/SearchPage/Search";

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