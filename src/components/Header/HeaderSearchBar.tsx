import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "src/hooks";
import HeaderSearchAutoComplete from "./HeaderSearchAutoComplete";

function HeaderSearchBar(): JSX.Element {
    // Local states
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isSelect, setIsSelect] = useState<boolean>(false);
    // Using hooks 
    const navigate = useNavigate();
    const debounce = useDebounce(searchValue.trim(), 500);

    async function fetchData(value: string): Promise<any> {
        const response = await fetch(`https://api.github.com/search/users?q=${value}`);
        const data = await response.json();
        return data;
    }

    function handleSearch(e: any): void {
        e.preventDefault();
        if (searchValue) {
            navigate(`/search?q=${searchValue}`);
            setIsHidden(true);
        }
    }

    function handleFocus(): void {
        if (searchValue.trim()) {
            setIsHidden(false);
            setIsSelect(false);
        } else {
            setIsHidden(true);
        }
    }

    useEffect(() => {
        if (debounce && !isSelect) {
            fetchData(debounce).then(results => setSearchResults(results.items));
            setIsHidden(false);
        } else {
            setSearchResults([]);
        }
    }, [debounce, isSelect]);

    return (
        <form
            onSubmit={handleSearch}
            className="relative hidden h-10 bg-white rounded-lg md:flex-1 md:flex md:items-center md:ml-10"
        >
            <span className="ml-5">
                <AiOutlineSearch className="text-xl text-gray" />
            </span>
            <input
                autoComplete="off"
                value={searchValue}
                type="search"
                className="w-[90%] px-2 outline-none placeholder-gray text-sm"
                placeholder="What do you want to buy?"
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={handleFocus}
            />
            <button type="submit" className="search-btn h-full px-5 text-primary text-sm hover:opacity-40 hover:bg-primary hover:text-white transition">
                <span className="vertical-line-search-bar"></span> Search
            </button>

            {/* HEADER SEARCH AUTOCOMPLETE */}
            <HeaderSearchAutoComplete
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                setIsSelect={setIsSelect}
                setSearchValue={setSearchValue}
                searchResults={searchResults}
            />
        </form>
    );
}

export default HeaderSearchBar;