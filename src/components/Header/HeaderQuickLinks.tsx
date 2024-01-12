import { Link, To } from "react-router-dom";

type HeaderQuickLink = {
    to: To,
    content: string,
    isActive: boolean,
}

const headerLinks: HeaderQuickLink[] = [
    { to: "/", content: "Babies & Kids", isActive: false },
    { to: "/", content: "Electronics", isActive: false },
    { to: "/", content: "Fashions", isActive: false },
    { to: "/", content: "Home & Garden", isActive: false },
    { to: "/", content: "Books", isActive: false },
    { to: "/", content: "Sports", isActive: false },
    { to: "/", content: "Flash Deals", isActive: false },
];

function HeaderQuickLinks(): JSX.Element {
    return (
        <div>
            {headerLinks.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    className={`block p-3.5 md:text-gray md:inline-block md:border-none md:mr-6 md:mb-0 md:p-0 md:text-sm hover:text-primary`}
                >
                    {link.content}
                </Link>
            ))}
        </div>
    );
}

export default HeaderQuickLinks;