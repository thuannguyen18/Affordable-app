import { Fragment } from "react";
import Carousel from "src/components/carousel";
import Container from "src/components/container";
import Category from "src/components/category/Categories";
import CollectionsSlider from "src/components/collections/CollectionsSlider";

function Home(): JSX.Element {
    return (
        <Fragment>
            <Carousel />
            <Container>
                <div className="flex justify-between pt-7">
                    {/* CATEGORIES SIDE BAR */}
                    {/* <Category /> */}

                    {/* COLLECTIONS OF PRODUCTS */}
                    {/* <div className="flex flex-col gap-y-6">
                        <CollectionsSlider isFlashDeals title="Deals Of The Day" />
                        <CollectionsSlider title="New Arrivals" />
                        <CollectionsSlider title="Best Weekend Sales" />
                        <CollectionsSlider title="You May Also Like" />
                    </div> */}
                </div>
            </Container>
        </Fragment>
    );
}

export default Home;