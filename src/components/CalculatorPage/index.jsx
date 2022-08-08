import { Fragment } from 'react';
import './style.css'
// import backImg from '../../imgs/matt-connor-9Qs_9n2oSJo-unsplash.jpg'
import arrowLeft from '../../imgs/arrow-left-white.png'
import arrowRight from '../../imgs/arrow-right-white.png'

function CalculatorPage() {
    return ( 
        <Fragment>
            <div id='background-conteiner'>
                <div id='grid-conteiner'>
                    <div id='content-conteiner'>
                        <div id='form-title'>
                            <h6>oi</h6>
                        </div>
                        <div id='form-body'>
                            <h6>oi</h6>
                        </div>
                        <div id='form-buttons'>
                            <button> <img src={arrowLeft} alt="arrow left" /> <h6 className='white'>previous</h6> </button>
                            <button> <h6 className='white'>next</h6> <img src={arrowRight} alt="arrow right" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default CalculatorPage;