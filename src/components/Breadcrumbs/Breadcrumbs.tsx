import { Link } from "react-router-dom";

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
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <Link to="/" className="ms-1 text-sm text-tx-5">{next}</Link>
                    </div>
                </li>
            </ol>
        </nav>
    );
}

export default Breadcrumbs;