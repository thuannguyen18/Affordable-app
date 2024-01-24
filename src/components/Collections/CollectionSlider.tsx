import "./Collections.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Product } from "src/services/product.service";
import { setRootValue } from "src/utils";
// Components
import CountDownTimer from "../countdownTimer";
import CollectionItem from "./CollectionItem";
import CollectionSliderSkeleton from "../skeleton/ProductSkeleton";

type Props = {
    isFlashDeals?: boolean;
    title: string;
    products: Product[];
    isFetching?: boolean;
};


function CollectionSlider(props: Props): JSX.Element {
    const { isFlashDeals, title, products = [], isFetching } = props;

    const [scrollCount, setSrollCount] = useState<number>(0);

    const ref = useRef(null);

    const PRODUCTS_ON_VIEW: number = isFlashDeals ? 7 : 6;

    const prevBtn = scrollCount !== 0 && (
        <button id="prev" className="slide-button" onClick={() => handleScroll(-1)}>
            <FaChevronLeft className="relative left-[-1px] text-sm" />
        </button>
    );

    const nextBtn = scrollCount !== Math.floor(products.length / PRODUCTS_ON_VIEW) && (
        <button id="next" className="slide-button" onClick={() => handleScroll(1)}>
            <FaChevronRight className="relative left-[1px] text-sm" />
        </button>
    );

    const handleScroll = (step: number): void => {
        const productList: any = ref.current;
        const direction: number = step;
        const scrollAmount: number = productList.clientWidth * direction;

        if (scrollAmount > 0) {
            setSrollCount((prev: number) => prev + 1);
        } else {
            setSrollCount((prev: number) => prev - 1);
        }

        productList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    useEffect(() => {
        setRootValue(products.length);
    }, [products]);

    return (
        <div className="py-3 px-4 rounded-lg bg-white w-full">
            {/* COLLECTION HEADING */}
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <h3 className="mr-4 text-title font-semibold">{title}</h3>
                    {isFlashDeals && <CountDownTimer />}
                </Link>
                <button className="flex items-center">
                    <span className="text-primary text-sm">See all</span>
                    <span className="ml-2.5">
                        <FaChevronRight className="text-primary text-sm" />
                    </span>
                </button>
            </div>

            {/* COLLECTION BODY CAROUSEL */}
            <div className="collection-body pt-3">
                {prevBtn}
                {isFetching && <CollectionSliderSkeleton />}
                <div ref={ref} className={isFlashDeals ? "product-list-flash-deals" : "product-list"}>
                    {products?.map(product =>
                        <CollectionItem
                            key={product.id}
                            product={product}
                            isFlashDeals={isFlashDeals}
                        />
                    )}
                </div>
                {nextBtn}
            </div>
        </div>
    );
}

export default CollectionSlider;