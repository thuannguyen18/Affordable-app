import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import useQuery from "../../hooks/useQuery";

function Search(): JSX.Element {
    let query = useQuery();
    let result = query.get("q");
    // Call api to get search results
    return ( 
        <Container>
            <Breadcrumbs next={`Results for: ${result}`} />
            
        </Container>
    );
}

export default Search;