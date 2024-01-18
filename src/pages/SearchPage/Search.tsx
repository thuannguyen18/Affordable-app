import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Container from "../../components/container/Container";
import { useQuery } from "../../hooks";

function Search(): JSX.Element {
    const query = useQuery();
    const result = query.get("q");
    // Call api to get search results
    return ( 
        <Container>
            <Breadcrumbs next={`Results for: ${result}`} />
            
        </Container>
    );
}

export default Search;