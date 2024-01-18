import { Link } from "react-router-dom";
import teddy from "src/assets/icons/teddy-bear.png";
import mobile from "src/assets/icons/mobile-phone.png";
import lipStick from "src/assets/icons/lip-stick.png";
import computer from "src/assets/icons/laptop-computer.png";
import shirt from "src/assets/icons/t-shirt.png";
import dress from "src/assets/icons/dress.png";
import womenShoes from "src/assets/icons/high-heeled-shoe.png";
import menShoes from "src/assets/icons/running-shoe.png";
import luggage from "src/assets/icons/luggage.png";
import watch from "src/assets/icons/watch.png";
import laptop from "src/assets/icons/laptop.png";
import glove from "src/assets/icons/glove-kitchen.png";
import bed from "src/assets/icons/bed.png";
import garden from "src/assets/icons/gardening-gloves.png";
import washingMachine from "src/assets/icons/washing-machine.png";
import shop from "src/assets/icons/shop.png";
import "./Categories.css";

const CATEGORIES = [
    {
        id: 1,
        title: "Toys - Kids",
        href: "/",
        image: teddy
    },
    {
        id: 2,
        title: "Smartphones - Tablets",
        href: "/",
        image: mobile
    },
    {
        id: 3,
        title: "Beauty - Healthy",
        href: "/",
        image: lipStick
    },
    {
        id: 4,
        title: "Computers - Digital",
        href: "/",
        image: computer
    },
    {
        id: 5,
        title: "Women's Fashions",
        href: "/",
        image: dress
    },
    {
        id: 6,
        title: "Men's Fashions",
        href: "/",
        image: shirt
    },
    {
        id: 7,
        title: "Women's Shoes",
        href: "/",
        image: womenShoes
    },
    {
        id: 8,
        title: "Men's Shoes",
        href: "/",
        image: menShoes
    },
    {
        id: 9,
        title: "Bags & Luggages",
        href: "/",
        image: luggage
    },
    {
        id: 10,
        title: "Watches",
        href: "/",
        image: watch
    },
    {
        id: 11,
        title: "Laptops",
        href: "/",
        image: laptop
    },
    {
        id: 12,
        title: "Kitchen",
        href: "/",
        image: glove
    },
    {
        id: 13,
        title: "Bed Room",
        href: "/",
        image: bed
    },
    {
        id: 14,
        title: "Garden",
        href: "/",
        image: garden
    },
    {
        id: 15,
        title: "Electronics",
        href: "/",
        image: washingMachine
    },
];

function Categories(): JSX.Element {
    return (
        <div className="category-sidebar w-[230px] max-h-screen sticky top-4 overflow-y-scroll overflow-hidden pb-[117px] md:block">
            {/* CATEGORIES */}
            <div className="category-list relative flex flex-col mb-4 py-3.5 px-2 rounded-lg bg-white">
                <h3 className="category-list-heading mb-2 pl-4 text-sm font-semibold">Categories</h3>
                {CATEGORIES.map(category => (
                    <Link
                        key={category.id}
                        to={category.href}
                        className="flex items-center rounded-lg px-4 py-2 hover:bg-gray-blur transition"
                    >
                        <img src={category.image} alt="category" className="category-img" />
                        <span className="ml-2.5 text-base md:text-sm text-title">{category.title}</span>
                    </Link>
                ))}
            </div>

            {/* CREATE YOUR OWN SHOP */}
            <div className="py-2.5 px-2 rounded-lg bg-white">
                <Link to="/" className="flex items-center rounded-lg px-4 py-2 hover:bg-gray-blur transition">
                    <img src={shop} alt="category" style={{ width: "36px" }} />
                    <span className="ml-2.5 text-sm text-title">Create Your Shop</span>
                </Link>
            </div>
        </div>
    );
}

export default Categories;