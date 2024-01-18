import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CountDownTimer from "../countdownTimer/CountDownTimer";
import "./Collections.css";

type Props = {
    isFlashDeals?: boolean;
    title: string;
};

function CollectionsSlider(props: Props): JSX.Element {
    const { 
        isFlashDeals = false, 
        title,
    } = props;

    const [width, setWidth] = useState<number>(0);
    const ref = useRef(null);

    function handleScroll(step: number): void {
        const productList: any = ref.current;
        const direction: number = step;
        const scrollAmount: number = productList.clientWidth * direction;
        setWidth(scrollAmount);
        productList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    return (
        <div className="w-[1139px] py-3 px-4 rounded-lg bg-white">
            {/* COLLECTIONS HEADING */}
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <h3 className="mr-4 text-title font-semibold">{title}</h3>
                    {isFlashDeals && <CountDownTimer />}
                </Link>
                <button className="flex items-center">
                    <span className="text-primary">See all</span>
                    <span className="ml-2.5">
                        <FaChevronRight className="text-primary" />
                    </span>
                </button>
            </div>

            {/* COLLECTION BODY CAROUSEL */}
            <div className="collection-body pt-3">
                <div className="slider-wrapper w-[1106px]">
                    {width > 1 && <button id="prev" className="slide-button" onClick={() => handleScroll(-1)}>
                        <FaChevronLeft className="relative left-[-1px] text-sm" />
                    </button>}
                    <div ref={ref} className="product-list">
                        <div className="product-item">
                            <img src="" alt="product" className="max-w-[142px] max-h-[142px]"/>
                            <h2 className="my-2 text-xs">Microsoft Laptop 4 - 15"</h2>
                            <p className="text-red text-center">$699.99</p>
                        </div>
                    </div>
                    {width < 1 && <button id="next" className="slide-button" onClick={() => handleScroll(1)}>
                        <FaChevronRight className="relative left-[1px] text-sm" />
                    </button>}
                </div>
            </div>
        </div>
    );
}

export default CollectionsSlider;