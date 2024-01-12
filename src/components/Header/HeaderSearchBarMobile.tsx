import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderSearchAutoComplete from "./HeaderSearchAutoComplete";

function HeaderSearchBarMobile(): JSX.Element {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [visible, setVisible] = useState<boolean>(false);

    const isHidden: boolean = searchResults.length < 1;

    useEffect(() => {
        if (searchValue) {
            setTimeout(() => {
                setSearchResults(["item1", "item2", "item3"]);
            }, 500);
        } else {
            setTimeout(() => {
                setSearchResults([]);
            }, 500);
        }
    }, [searchValue, visible]);

    return (
        <div className="relative flex flex-1 items-center border border-tx-3 rounded-lg p-1">
            <input 
                value={searchValue}
                type="search" 
                placeholder="Search" 
                className="flex-1 outline-none px-2 text-sm" 
                onChange={(e) => setSearchValue(e.target.value)}
                onBlur={() => setSearchResults([])}
                onFocus={() => setVisible(!visible)}
            />
            <span className="px-3 py-2 bg-primary rounded-lg">
                <AiOutlineSearch className="text-white" />
            </span>
            <HeaderSearchAutoComplete isHidden={isHidden} searchResults={searchResults} />
        </div>
    );
}

export default HeaderSearchBarMobile;