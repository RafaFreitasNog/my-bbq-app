import { Fragment } from "react";

import './style.css';

function FormProgressBar(props) {

    function progressDecider() {
        switch (props.page) {
            case 0:
                return "progress-1";
            case 1:
                return "progress-2";
            case 2:
                return "progress-3";
        
            default:
                break;
        }
    }

    return ( 
        <Fragment>
            <div id="progress-bar-conteiner">
                <div id="progress-bar">
                    <div id={progressDecider()} className="progress"></div>
                </div>
            </div>
        </Fragment>
     );
}

export default FormProgressBar;