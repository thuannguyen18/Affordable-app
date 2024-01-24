import { Row, Col, Skeleton } from "antd";

function ProductSkeleton(): JSX.Element {
    return (
        <Row gutter={8}>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
            <Col span={4}><Skeleton.Input active style={{ width: "168px", height: "198px" }}></Skeleton.Input></Col>
        </Row>
    );
}

export default ProductSkeleton;