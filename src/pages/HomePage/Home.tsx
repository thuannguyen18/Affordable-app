import { Fragment } from "react";
import Carousel from "../../components/Carousel/Carousel";
import CollectionsSlider from "../../components/Collections/CollectionsSlider";
import Container from "../../components/Container/Container";

function Home(): JSX.Element {
    return (
        <Fragment>
            <Carousel />
            <Container>
                <CollectionsSlider />
            </Container>
        </Fragment>
    );
}

export default Home;