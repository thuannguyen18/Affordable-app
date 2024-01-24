import { Link } from "react-router-dom";

type Props = {
    title?: string;
    content?: string;
    image?: string;
    buttonText?: string;
    buttonBgColor?: string;
    href?: string;
}

function Banner({ title, content, image, buttonText, buttonBgColor, href }: Props): JSX.Element {
    return (
        <Link to="/" className="">
            <div className="absolute top-[20px] left-[20px] w-[180px]">
                <h3 className="text-2xl text-white font-semibold uppercase">{title}</h3>
                <button className={`mt-3 py-2 px-3 rounded ${buttonBgColor} text-white uppercase font-semibold`}>{buttonText}</button>
                <p className="hidden mt-2 text-xs text-white md:block">{content}</p>
            </div>
            <img src={image} alt="banner" className="w-full rounded-lg" />
        </Link>
    );
}

export default Banner;