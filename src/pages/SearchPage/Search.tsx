import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Container from "../../components/container/Container";
import { useQuery } from "../../hooks";

function Search(): JSX.Element {
    const query = useQuery();
    const result = query.get("q");
    // Call api to get search results
    return ( 
        <Container properties={["px-3"]}>
            <Breadcrumbs title={`Results for: ${result}`} />
        </Container>
    );
}

export default Search;