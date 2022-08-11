import React, { Fragment } from 'react';
import './style.css'

function FormBarbecueInfo() {
    return ( 
        <Fragment>
            <h5 id='title'>GUESTS</h5>
            <p className='subtitle'>Tell us more about the people you invited so we can precisely calculate the amount of meat</p>

            <hr className='line'/>
        </Fragment>
     );
}

export default FormBarbecueInfo;