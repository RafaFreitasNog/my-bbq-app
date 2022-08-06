import { Fragment } from "react";
import HeroSection from '../heroSection';
import Footer from "../footerSection";
import MainSection from "../mainSection";

function MainMenu() {
    return (
        <Fragment>
            <HeroSection/>
            <MainSection/>
            <Footer/>
        </Fragment>
    )
}

export default MainMenu;