import { Fragment } from "react";
import './style.css';
import navbarIcon from "../../imgs/bar-icon-white.png";


function HeaderSection() {
    return (
        <Fragment>
            <div id="header-grid-conteiner">
                <div id="header-grid" className="grid">
                    <img src={navbarIcon} alt="nav bar logo" id="navbar-icon"/>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderSection;