import React, { Fragment } from 'react';
import './style.css'

function FormBarbecueName(props) {

    function handleBarbecueInputChange(currentInput) {
        props.handlePageOneBarbecueInputChange(currentInput)
    }

    function handleUserInputChange(currentInput) {
        props.handlePageOneUserInputChange(currentInput)
    }

    return ( 
        <Fragment>
            <h5 id='title'>NAME YOUR BARBECUE</h5>
            <p className='subtitle-forms subtitle'>Give it a name so we can turn your experience even more unique and personalized</p>

            <hr className='line'/>

            <div id='page1-content-conteiner'>
                <label className='label' htmlFor="bbq-name">Barbecue Name</label>
                <input 
                id='bbq-name' 
                className='input' 
                type="text" 
                placeholder="ex: Birthday Barbecue"
                value={props.saveBarbecueName}
                onChange={(e) => handleBarbecueInputChange(e.target.value)}/>

                <label className='label' htmlFor="user-name">Host Name</label>
                <input 
                id='your-name' 
                className='input' 
                type="text" 
                placeholder="ex: Raphael Freitas"
                value={props.saveUserName}
                onChange={(e) => handleUserInputChange(e.target.value)}/>
            </div>
        </Fragment>
     );
}

export default FormBarbecueName;