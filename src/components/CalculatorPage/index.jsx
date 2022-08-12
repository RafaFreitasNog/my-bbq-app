import { Fragment, useState } from 'react';
import './style.css'
// import backImg from '../../imgs/matt-connor-9Qs_9n2oSJo-unsplash.jpg'
import arrowLeft from '../../imgs/arrow-left-white.png'
import arrowRight from '../../imgs/arrow-right-white.png'
import FormBarbecueName from '../calculatorForms/formBarbecueName';
import FormBarbecueInfo from '../calculatorForms/formBarbecueInfo';
import FormBarbecueAcomp from '../calculatorForms/formBarbecueAcomp';

function CalculatorPage() {

    const [page, setPage] = useState(0);
    const [barbecueName, setBarbecueName] = useState();



    const [numberMen, setNumberMan] = useState(0);
    const [numberWomen, setNumberWomen] = useState(0);
    const [numberChildren, setNumberChildren] = useState(0);

    const formTitles = ["Name Your Babecue", "Step 2", "Step 3"];

    function PageDisplay() {
        switch (page) {
            case 0:
                return <FormBarbecueName
                        handlePageOneInputChange = {handlePageOneInputChange}/>
                break;
        
            case 1:
                return <FormBarbecueInfo/>
                break;
        
            case 2:
                return <FormBarbecueAcomp/>
                break;
        
            default:
                break;
        }
    }
    function handlePageOneInputChange(currentInput) {
        setBarbecueName(currentInput)
    }

    function handleNextClick() {
        setPage((oldPage) => oldPage + 1)
    }

    function handlePrevClick() {
        setPage((oldPage) => oldPage - 1)
    }

    return ( 
        <Fragment>
            <div id='background-conteiner'>
                <div id='grid-conteiner'>
                    <div id='content-conteiner'>
                        <div id='form-conteiner'>
                            
                            <div id='form-body'>
                                {PageDisplay()}
                            </div>

                            <div id='form-buttons'>
                                <button className='page-change-button' onClick={handlePrevClick} disabled={page == 0}>
                                    <div className='button-div'>
                                        <img className='button-icons' src={arrowLeft} alt="arrow left" />
                                        <p className='white'>previous</p>
                                    </div>
                                </button>

                                <button className='page-change-button' onClick={handleNextClick} disabled={page == formTitles.length - 1}>
                                    <div className='button-div'>
                                        <p className='white'>next</p>
                                        <img className='button-icons' src={arrowRight} alt="arrow right" />
                                    </div>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default CalculatorPage;