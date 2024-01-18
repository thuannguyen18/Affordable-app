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
        <div className="quick-link bg-primary md:bg-white">
            <div className="quick-link-list">
                {headerLinks.map((link, index) => (
                    <Link
                        className="quick-link-item pt-1 text-white hover:text-tx-3 md:text-gray md:inline-block md:border-none md:mr-6 md:mb-0 md:p-0 md:text-sm md:hover:text-primary md:hover:bg-white"
                        key={index}
                        to={link.to}
                    >
                        {link.content}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HeaderQuickLinks;