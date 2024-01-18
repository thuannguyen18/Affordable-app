import { useEffect } from "react";
import CartEmpty from "../../components/cart/CartEmpty";

function Checkout() {
    useEffect((): any => {
        document.title = "Cart | Affordable";
        return () => document.title = "Affordable";
    }, []);

    return (
        <div className="md:px-3 container mx-auto px-4 py-6">
            <h4 className="hidden text-xl uppercase mb-3 lg:block">Shopping Cart</h4>
            <div className="md:rounded-lg md:bg-white md:py-4">
                <CartEmpty />
            </div>
        </div>
    );
}

export default Checkout;