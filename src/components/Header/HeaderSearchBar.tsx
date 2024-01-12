import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGetPostsQuery } from "../../services/post.service";
import HeaderSearchAutoComplete from "./HeaderSearchAutoComplete";
import { useEffect, useState } from "react";

function HeaderSearchBar(): JSX.Element {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const { data } = useGetPostsQuery();
    const navigate = useNavigate();
    
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
        } else {
            setIsHidden(true);
        }
    }

    useEffect(() => {
        handleFocus();
    }, [searchValue]);

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
            <HeaderSearchAutoComplete isHidden={isHidden} setIsHidden={setIsHidden} searchResults={data!} />
        </form>
    );
}

export default HeaderSearchBar;