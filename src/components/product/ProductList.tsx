import { Row, Col } from "antd";
// Components
import CollectionItem from "src/components/collections/CollectionItem";
import ProductListSkeleton from "src/components/skeleton/ProductListSkeleton";

type Props = {
    products: any[];
    isLoading: boolean;
};

function Product({ products, isLoading }: Props): JSX.Element {
    if (isLoading) {
        return <ProductListSkeleton />;
    }

    return (
        <Row gutter={8} className="w-full">
            {products?.map(product => (
                <Col key={product.id} xs={12} sm={8} md={6} lg={4} className="my-1">
                    <CollectionItem product={product} />
                </Col>
            ))}
        </Row>
    );
}

export default Product;