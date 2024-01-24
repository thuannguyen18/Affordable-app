import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./Collections.css";

type Props = {
    isFlashDeals?: boolean;
    product: {
        id: string | number;
        images: string[];
        title: string;
        price: string | number;
    },
}

function CollectionItem({ product, isFlashDeals }: Props): JSX.Element {
    if (isFlashDeals) {
        return (
            <Link to="/" key={product.id} className="product-item-flash-deals relative">
                <img src={product.images[0]} alt="product" className="w-full h-[142px]" />
                <h2 className="product-item-title-flash-deals my-2 text-xs text-center">{product.title}</h2>
                <p className="text-red text-center">${product.price}</p>
                <span className="absolute top-1 left-1 p-0.5 bg-[#ffdbde] text-xs text-red font-semibold rounded">-31%</span>
            </Link>
        );
    }

    return (
        <Link to="/" key={product.id} className={`product-item hover:shadow-xl`}>
            <img src={product.images[0]} alt="product" className="product-item-img" />
            <div className="product-item-container">
                <h2 className="product-item-title">{product.title}</h2>
                <span className="flex">
                    <span>
                        <FaStar className="text-xs text-[#dddde3]" />
                    </span>
                    <span>
                        <FaStar className="text-xs text-[#dddde3]" />
                    </span>
                    <span>
                        <FaStar className="text-xs text-[#dddde3]" />
                    </span>
                    <span>
                        <FaStar className="text-xs text-[#dddde3]" />
                    </span>
                    <span>
                        <FaStar className="text-xs text-[#dddde3]" />
                    </span>
                </span>
            </div>
            <p className="p-2 text-title">${product.price}</p>
        </Link>
    );
}

export default CollectionItem;