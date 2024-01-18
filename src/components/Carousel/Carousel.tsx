import { Carousel } from "antd";
import lunarBanner from "src/assets/images/banner/lunar_deal_banner.jpg";
import newyearBanner from "src/assets/images/banner/new-year-banner.jpg";
import banner3 from "src/assets/images/banner/new-banner-3.jpg";
import banner4 from "src/assets/images/banner/new-banner-4.jpg";
import banner5 from "src/assets/images/banner/new-banner-5.jpg";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function CarouselSlider() {
    const images = [banner3, lunarBanner, newyearBanner, banner4, banner5];
    const renderImages = () => images.map((image, index) => <CarouselItem key={index} image={image} />)
    return (
        <Carousel autoplay>
            {renderImages()}
        </Carousel>
    );
}

export default CarouselSlider;