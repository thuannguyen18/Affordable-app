import Breadcrumbs from "src/components/breadcrumbs/Breadcrumbs";
import Container from "src/components/container";

function ProductList(): JSX.Element {
    return (
        <Container properties={["px-3"]}>
            <Breadcrumbs title="Product List" />
        </Container>
    );
}

export default ProductList;