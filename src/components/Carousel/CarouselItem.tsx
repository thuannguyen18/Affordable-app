import "./Carousel.css";

type Props = { image: string };

function CarouselItem({ image }: Props): JSX.Element {
    return <img src={image} alt="image" className="carousel-img w-full rounded-lg" />;
}

export default CarouselItem;