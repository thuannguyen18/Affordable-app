import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CountDownTimer from "../CountdownTimer/CountDownTimer";

function CollectionsSlider(): JSX.Element {
    return (
        <div className=" mt-8 py-3 px-4 rounded-lg bg-white">
            {/* COLLECTIONS HEADING */}
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <h3 className="mr-4 text-title font-semibold">Deals Of The Day</h3>
                    <CountDownTimer />
                </Link>
                <button className="flex items-center">
                    <span className="text-primary">See all</span>
                    <span className="ml-2.5">
                        <FaChevronRight className="text-primary" />
                    </span>
                </button>
            </div>

            {/* COLLECTION BODY CAROUSEL */}
            <div className="carousel-wrapper">

            </div>
        </div>
    );
}

export default CollectionsSlider;