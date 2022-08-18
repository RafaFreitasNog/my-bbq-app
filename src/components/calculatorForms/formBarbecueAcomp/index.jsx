import React, { Fragment } from 'react';
import './style.css'

function FormBarbecueAcomp(props) {

    function handleRadioInputChange(value) {
        props.setIsThereFood(value)
        console.log(value)
    }

    return ( 
        <Fragment>
            <h5 id='title'>OTHER INFORMATION</h5>
            <p className='subtitle'>This will help us be even more precise with our calculation</p>

            <hr className='line'/>

            <form>
                <h6 className='label'>Side Dishes</h6>
                <p className='subtitle'>will there be any other food such as salads, rice, potatoes?</p>
                <div id='radio-input-conteiner'>
                    <div className='radio-input'>
                        <input type="radio" id='yes' name='acompanhamentos' value={true} checked={props.saveIsThereFood === "true"}
                        onChange={(e) => handleRadioInputChange(e.target.value)}/>
                        <label htmlFor="yes" className='radio-input-label'>Yes</label>
                    </div>
                    <div className='radio-input second'>
                        <input type="radio" id='no' name='acompanhamentos' value={false} checked={props.saveIsThereFood === "false"}
                        onChange={(e) => handleRadioInputChange(e.target.value)}/>
                        <label htmlFor="no" className='radio-input-label'>No</label>
                    </div>
                </div>
            </form>
        </Fragment>
     );
}

export default FormBarbecueAcomp;