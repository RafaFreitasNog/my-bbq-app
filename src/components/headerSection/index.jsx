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
                        <Link to='/' className="navbar-pages-link"><h6 className="white link-title">Home</h6></Link>
                        <Link to='/calculator' className="navbar-pages-link"><h6 className="white link-title">Calculator</h6></Link>
                    </div>
                </div>
            </div>
            <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul id="sidebar-elements-conteiner">
                    <li className="sidebar-li-element">
                        <h6 onClick={toggleSidebar} className="white sidebar-element-content li-title">x</h6>
                    </li>
                    {SidebarData.map((element, index) => {
                        return (
                            <li key={index} className='sidebar-li-element'>
                                <Link to={element.path}className="sidebar-link">
                                    <div className="sidebar-element-content">
                                        <h6 className="li-title">{element.title}</h6>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
}

export default HeaderSection;