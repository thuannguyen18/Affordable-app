import { useGetProductsQuery } from "src/services/product.service";
import { Row, Col, Button } from "antd";
// Components
import Carousel from "src/components/carousel";
import Container from "src/components/container";
import Categories from "src/components/category/Categories";
import CollectionSlider from "src/components/collections/CollectionSlider";
import ProductList from "src/components/product/ProductList";
import Footer from "src/components/footer";
import Banner from "src/components/banner";
// Images
import banner1 from "src/assets/images/banner/banner1_540x.webp";
import banner2 from "src/assets/images/banner/banner2_540x.webp";
import banner3 from "src/assets/images/banner/banner3_540x.webp";
import banner4 from "src/assets/images/banner/banner4_540x.webp";
import banner5 from "src/assets/images/banner/banner5_540x.webp";
import banner6 from "src/assets/images/banner/banner6_540x.webp";

function Home(): JSX.Element {
    const { data, isLoading, isFetching } = useGetProductsQuery();
    return (
        <Container properties={["px-3"]}>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
                <Categories />
                <div className="flex flex-col items-center gap-y-4 lg:ml-6 lg:col-span-10">
                    <Carousel />
                    <CollectionSlider isFlashDeals title="Deals Of The Day" products={data!} isFetching={isFetching} />
                    <CollectionSlider title="New Arrivals" products={data!} isFetching={isFetching} />

                    {/* BANNER ADVERTISE */}
                    <Row gutter={8}>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="food processor"
                                content="Mix it. Grind it. Blend it."
                                image={banner1}
                                buttonText="shop now"
                                buttonBgColor="bg-[#9760B3]"
                            />
                        </Col>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="4K ULTRA HD SMART"
                                content="Mega Digital Technologies"
                                image={banner2}
                                buttonText="up to 30% off"
                                buttonBgColor="bg-[#E64398]"
                            />
                        </Col>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="PRESS TO IMPRESS"
                                image={banner3}
                                buttonText="20 - 70% off"
                                buttonBgColor="bg-[#674D23]" />
                        </Col>
                    </Row>

                    <CollectionSlider title="Best Weekend Sales" products={data!} isFetching={isFetching} />
                    <CollectionSlider title="You May Also Like" products={data!} isFetching={isFetching} />

                    {/* BANNER ADVERTISE */}
                    <Row gutter={8}>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="take it easy 20% off"
                                content="Free Shipping For Order Over $299.00"
                                image={banner4}
                                buttonText="combo deals"
                                buttonBgColor="bg-[#3AB4D8]"
                            />
                        </Col>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="free santa gift"
                                image={banner5}
                                buttonText="starting at $99"
                                buttonBgColor="bg-[#7971F2]"
                            />
                        </Col>
                        <Col xs={24} md={8} className="relative my-3 md:my-0">
                            <Banner
                                title="women's clothes & bag"
                                content="Buy 3 Get 2. Apply to Checkout."
                                image={banner6}
                                buttonText="shop now"
                                buttonBgColor="bg-[#024FCC]"
                            />
                        </Col>
                    </Row>
                    <ProductList products={data!} isLoading={isLoading} />
                    <Button size="large" className="w-[240px] border border-primary text-primary hover:bg-[#0060ff1f]">
                        More Products
                    </Button>
                    <Footer />
                </div>
            </div>
        </Container>
    );
}

export default Home;