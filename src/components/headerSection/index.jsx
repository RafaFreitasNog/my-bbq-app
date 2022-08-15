import { Fragment } from "react";
import './style.css';
import navbarIcon from "../../imgs/bar-icon-white.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./sidebarData";


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
                <div id="sidebar-content-conteiner">
                    <h3 onClick={toggleSidebar} className="white">x</h3>
                    {SidebarData.map((element, index) => {
                        return (
                            <div key={index} className='nav-page-div'>
                                <Link to={element.path}><h5>{element.title}</h5></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderSection;