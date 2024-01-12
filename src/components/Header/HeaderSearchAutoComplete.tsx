import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

type Props = {
    isHidden: boolean;
    setIsHidden: any;
    searchResults: any[];
}

function HeaderSearchAutoComplete({ isHidden, setIsHidden, searchResults = [] }: Props): JSX.Element {
    return (
        <div className={`${isHidden && "hidden"} absolute top-10 right-0 left-0 border border-gray-blur bg-white w-full shadow-xl`}>
            {searchResults.map((result, index) => {
                if (index < 10) {
                    return (
                        <Link 
                            key={index} 
                            to={`/search?q=${result.title}`} 
                            className="py-2 hover:bg-gray-blur flex items-center px-6"
                            onClick={() => setIsHidden(true)}
                        >
                            <BiSearchAlt className="text-lg text-gray-400 mr-2" />
                            <span className="text-sm">{result.title}</span>
                        </Link>
                    );
                }
                return;
            })}
        </div>
    );
}

export default HeaderSearchAutoComplete;