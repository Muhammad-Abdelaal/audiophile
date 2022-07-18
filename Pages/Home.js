import { Fragment } from "react";
import CategoriesSection from "../components/Pages Components/Home Page/CategoriesSection";
import Hero from "../components/Pages Components/Home Page/Hero";
import ShowcaseProductsSection from "../components/Pages Components/Home Page/ShowcaseProductsSection";

function Home () {
    return (
        <Fragment>
            <Hero />
            <CategoriesSection />
            <ShowcaseProductsSection />
        </Fragment>
    )
}

export default Home;