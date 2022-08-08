import { Fragment } from "react";
import './style.css';
import navbarIcon from "../../imgs/bar-icon-white.png";
import { Link } from "react-router-dom";


function HeaderSection() {
    return (
        <Fragment>
            <div id="header-grid-conteiner">
                <div id="header-grid" className="grid">
                    <img src={navbarIcon} alt="nav bar logo" id="navbar-icon"/>
                    <div id="navbar-pages">
                        <Link to='/' className="navbar-pages-link"><p>Home</p></Link>
                        <Link to='/calculator' className="navbar-pages-link"><p>Calculator</p></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderSection;