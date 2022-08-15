import { Fragment } from "react";
import './style.css';
import navbarIcon from "../../imgs/bar-icon-white.png";
import { Link } from "react-router-dom";
import { useState } from "react";


function HeaderSection() {

    const [sidebar, setSidebar] = useState(false);

    function toggleSidebar() {
        setSidebar(!sidebar)
    }

    return (
        <Fragment>
            <div id="header-grid-conteiner">
                <div id="header-grid" className="grid">
                    <img onClick={toggleSidebar} src={navbarIcon} alt="nav bar logo" id="navbar-icon"/>
                    <div id="navbar-pages">
                        <Link to='/' className="navbar-pages-link"><p className="white">Home</p></Link>
                        <Link to='/calculator' className="navbar-pages-link"><p className="white">Calculator</p></Link>
                    </div>
                </div>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <h4>ola</h4>
            </div>
        </Fragment>
    )
}

export default HeaderSection;