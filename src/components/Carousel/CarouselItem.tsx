type Props = {
    image: string;
}

function CarouselItem({ image }: Props): JSX.Element {
    return (
        <div className="bg-red shadow slide-item trasition-all">
            <img src={image} alt="image" className="w-full h-[235px] sm:h-[335px] md:h-[435px]" />
        </div>
    );
}

export default CarouselItem;