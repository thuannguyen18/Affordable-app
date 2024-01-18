import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "src/hooks";
import HeaderSearchAutoComplete from "./HeaderSearchAutoComplete";

type Props = { setIsSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>> };

function HeaderSearchBarMobile({ setIsSearchBarOpen }: Props): JSX.Element {
    // Local states
    const [value, setValue] = useState<string>("");
    const [results, setResults] = useState<string[]>([]);
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isSelect, setIsSelect] = useState<boolean>(false);
    // Using hook
    const navigate = useNavigate();
    const debounce = useDebounce(value.trim(), 300);

    async function fetchData(value: string): Promise<any> {
        const response = await fetch(`https://api.github.com/search/users?q=${value}`);
        const data = await response.json();
        return data;
    }

    function handleSubmit(e: any): void {
        e.preventDefault();
        if (value) {
            navigate(`/search?q=${value}`);
            setIsSearchBarOpen(false);
        }
    }

    function handleFocus(): void {
        if (value.trim()) {
            setIsHidden(false);
            setIsSelect(false);
        } else {
            setIsHidden(true);
        }
    }

    useEffect(() => {
        if (debounce && !isSelect) {
            fetchData(debounce).then(results => setResults(results.items));
            setIsHidden(false);
        } else {
            setResults([]);
        }
    }, [debounce, isSelect]);

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex flex-1 items-center border border-tx-3 rounded-lg p-1"
        >
            <input
                value={value}
                type="search"
                placeholder="Search"
                className="flex-1 outline-none px-2 text-sm"
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleFocus}
            />
            <button type="submit" className="px-3 py-2 bg-primary rounded-lg">
                <AiOutlineSearch className="text-white" />
            </button>

            {/* HEADER SEARCH AUTOCOMPLETE */}
            <HeaderSearchAutoComplete
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                setIsSelect={setIsSelect}
                setSearchValue={setValue}
                setIsSearchBarOpen={setIsSearchBarOpen}
                searchResults={results}
            />
        </form>
    );
}

export default HeaderSearchBarMobile;