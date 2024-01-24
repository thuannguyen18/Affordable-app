import Home from "src/pages/HomePage/Home";
import Checkout from "src/pages/CheckoutPage/Checkout";
import Search from "src/pages/SearchPage/Search";
import ProductList from "src/pages/ProductPage/ProductList";

interface Routes {
    path: string;
    component: React.FunctionComponent;
}

const publicRoutes: Routes[] = [
    { path: "/", component: Home },
    { path: "/search", component: Search },
    { path: "/checkout", component: Checkout },
    { path: "/:category", component: ProductList },
];

const privateRoutes: Routes[] = [];

export { publicRoutes, privateRoutes };