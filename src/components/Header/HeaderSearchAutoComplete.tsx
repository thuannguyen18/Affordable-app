import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

type Props = {
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setIsSearchBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    searchResults: any[];
}

function HeaderSearchAutoComplete(props: Props): JSX.Element {
    // Props
    const { isHidden, setIsHidden, setSearchValue, setIsSelect, setIsSearchBarOpen, searchResults } = props;
    // Check for search autocomplete is open or not
    const hidden: boolean = isHidden || searchResults.length < 1;
    return (
        <div className={`${hidden && "hidden"} absolute top-10 right-0 left-0 z-10 border border-gray-blur bg-white w-full shadow-xl`}>
            {searchResults.slice(0, 10).map((result, index) => (
                <Link
                    key={index}
                    to={`/search?q=${result.login}`}
                    className="py-2 hover:bg-gray-blur flex items-center px-6"
                    onClick={() => {
                        setIsHidden(true);
                        setIsSelect(true);
                        setSearchValue(result.login);
                        setIsSearchBarOpen(false);
                    }}
                >
                    <BiSearchAlt className="text-lg text-gray-400 mr-2" />
                    <span className="text-sm">{result.login}</span>
                </Link>
            ))}
        </div>
    );
}

export default HeaderSearchAutoComplete;