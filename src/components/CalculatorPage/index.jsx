import { Fragment, useState } from 'react';
import './style.css'
// import backImg from '../../imgs/matt-connor-9Qs_9n2oSJo-unsplash.jpg'
import arrowLeft from '../../imgs/arrow-left-white.png'
import arrowRight from '../../imgs/arrow-right-white.png'
import FormBarbecueName from '../calculatorForms/formBarbecueName';
import FormBarbecueInfo from '../calculatorForms/formBarbecueInfo';
import FormBarbecueAcomp from '../calculatorForms/formBarbecueAcomp';
import FormProgressBar from '../formProgressBar';
import FormBarbecueResult from '../calculatorForms/formBarbecueResult';

function CalculatorPage() {

    const [page, setPage] = useState(0);

    const [barbecueName, setBarbecueName] = useState("");
    const [userName, setUserName] = useState("");

    const [numberMen, setNumberMen] = useState(0);
    const [numberWomen, setNumberWomen] = useState(0);
    const [numberChildren, setNumberChildren] = useState(0);

    const [isThereFood, setIsThereFood] = useState(false);

    function PageDisplay() {
        switch (page) {
            case 0:
                return <FormBarbecueName
                        handlePageOneBarbecueInputChange = {handlePageOneBarbecueInputChange}
                        handlePageOneUserInputChange = {handlePageOneUserInputChange}
                        saveBarbecueName = {barbecueName}
                        saveUserName = {userName}/>
            case 1:
                return <FormBarbecueInfo
                        setNumberMen = {setNumberMen}
                        setNumberWomen = {setNumberWomen}
                        setNumberChildren = {setNumberChildren}
                        saveMale = {numberMen}
                        saveFemale = {numberWomen}
                        saveChildren = {numberChildren}/>
            case 2:
                return <FormBarbecueAcomp
                        setIsThereFood = {setIsThereFood}
                        saveIsThereFood = {isThereFood}/>
            case 3:
                return <FormBarbecueResult
                        barbecueName = {barbecueName}
                        userName = {userName}
                        numberMen = {numberMen}
                        numberWomen = {numberWomen}
                        numberChildren = {numberChildren}
                        isThereFood = {isThereFood}/>
            default:
                break;
        }
    }
    function handlePageOneBarbecueInputChange(currentInput) {
        setBarbecueName(currentInput)
    }

    function handlePageOneUserInputChange(currentInput) {
        setUserName(currentInput)
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
                <div id='grid-conteiner' className='grid'>
                    <FormProgressBar
                    page = {page}/>
                    <div id='content-conteiner'>
                        <div id='form-conteiner'>
                            
                            <div id='form-body'>
                                {PageDisplay()}
                            </div>

                            <div id='form-buttons'>
                                <button className={page === 0 ? 'page-change-button disabled' : 'page-change-button'} 
                                onClick={handlePrevClick} disabled={page === 0}>
                                    <div className='button-div'>
                                        <img className='button-icons' src={arrowLeft} alt="arrow left" />
                                        <p className='white'>previous</p>
                                    </div>
                                </button>

                                <button className={page === 3 ? 'page-change-button disabled' : 'page-change-button'} onClick={handleNextClick} disabled={page === 3}>
                                    <div className='button-div'>
                                        <p className='white'>{page === 2 ? 'calculate' : 'next'}</p>
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