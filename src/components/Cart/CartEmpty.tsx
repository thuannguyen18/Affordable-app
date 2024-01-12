import { Link } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart.png";

function CartEmpty(): JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={emptyCart} alt="empty-cart-img" className="w-[160px] h-[160px]" />
            <h4 className="mb-1 mt-2 text-title font-semibold md:text-lg">Your cart is empty</h4>
            <p className="px-4 text-center text-sm md:text-base">Looks like you have no items in your shopping cart. Let's go buy something!</p>
            <Link to="/" className="w-full mt-7 py-3.5 px-4 bg-primary rounded text-center text-sm text-white hover:opacity-80 transition sm:py-2.5 sm:w-[186px] md:text-base">Continue Shopping</Link>
        </div>
    );
}

export default CartEmpty;