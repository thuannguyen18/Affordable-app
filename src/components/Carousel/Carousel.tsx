import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import lunarBanner from "../../assets/images/banner/lunar_deal_banner.jpg";
import newyearBanner from "../../assets/images/banner/new-year-banner.jpg";
import banner3 from "../../assets/images/banner/new-banner-3.jpg";
import banner4 from "../../assets/images/banner/new-banner-4.jpg";
import banner5 from "../../assets/images/banner/new-banner-5.jpg";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const images = [banner3, lunarBanner, newyearBanner, banner4, banner5];

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", top: "50%", right: "3%" }}
            onClick={onClick}
        />
    );
}

function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", top: "50%", left: "3%", zIndex: 10 }}
            onClick={onClick}
        />
    );
}

function Carousel(): JSX.Element {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />
    };

    const renderImages = () => images.map((image, index) => <CarouselItem key={index} image={image} />)

    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <Slider {...settings}>
                    {renderImages()}
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;