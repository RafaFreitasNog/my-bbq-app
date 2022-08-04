import { Fragment } from "react";
import HeroSection from '../heroSection';
import Footer from "../footerSection";
import MainSection from "../mainSection";
import HeaderSection from "../headerSection";

function MainMenu() {
    return (
        <Fragment>
            <HeaderSection/>
            <HeroSection/>
            <MainSection/>
            <Footer/>
        </Fragment>
    )
}

export default MainMenu;