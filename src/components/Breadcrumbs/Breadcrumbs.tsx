import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

type Props = {
    next: any;
}

function Breadcrumbs({ next }: Props): JSX.Element {
    return (
        <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm text-tx-4 hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <span className="">
                            <FaChevronRight className="text-sm text-tx-4" />
                        </span>
                        <Link to="/" className="ms-1 text-sm text-tx-5">{next}</Link>
                    </div>
                </li>
            </ol>
        </nav>
    );
}

export default Breadcrumbs;