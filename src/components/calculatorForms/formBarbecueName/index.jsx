import React, { Fragment, useState } from 'react';
import './style.css'

function FormBarbecueName(props) {

    const [barbecueName, setBarbecueName] = useState();

    function handleInputChange(currentInput) {
        setBarbecueName(currentInput)
        props.handlePageOneInputChange(currentInput)
    }

    return ( 
        <Fragment>
            <h5 id='title'>NAME YOUR BARBECUE</h5>
            <p className='subtitle'>Give it a name so we can turn your experience even more unique and personalized</p>

            <hr className='line'/>

            <label className='label' htmlFor="bbq-name">Name</label>
            <input 
            id='bbq-name' 
            className='input' 
            type="text" 
            placeholder="ex: Raphael's Barbecue"
            onChange={e => handleInputChange(e.target.value)}/>
        </Fragment>
     );
}

export default FormBarbecueName;