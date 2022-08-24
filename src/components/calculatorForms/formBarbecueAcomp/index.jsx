import React, { Fragment } from 'react';
import './style.css'

function FormBarbecueAcomp(props) {

    function handleRadioInputChange(value) {
        props.setIsThereFood(value)
    }

    return ( 
        <Fragment>
            <h5 id='title'>OTHER INFORMATION</h5>
            <p className='subtitle-forms subtitle'>This will help us be even more precise with our calculation</p>

            <hr className='line'/>

            <form>
                <h6 className='label'>Side Dishes</h6>
                <p className='subtitle-forms subtitle'>will there be any other food such as salads, rice, potatoes?</p>
                <div id='radio-input-conteiner'>
                    <div className='radio-input'>
                        <label className='custom-button'>
                            <input type="radio" id='yes' className='radio' name='acompanhamentos' value={true} checked={props.saveIsThereFood === "true"}
                            onChange={(e) => handleRadioInputChange(e.target.value)}/>
                            <div className={props.saveIsThereFood === "true" ? 'checkmark' : 'checkmark not-selected'}></div>
                        </label>
                        <label htmlFor="yes" className='radio-input-label'>Yes</label>
                    </div>
                    <div className='radio-input second'>
                        <label className='custom-button'>
                            <input type="radio" id='no' className='radio' name='acompanhamentos' value={false} checked={props.saveIsThereFood === "false"}
                            onChange={(e) => handleRadioInputChange(e.target.value)}/>
                            <div className={props.saveIsThereFood === "false" ? 'checkmark' : 'checkmark not-selected'}></div>
                        </label>
                        <label htmlFor="no" className='radio-input-label'>No</label>
                    </div>
                </div>
            </form>
        </Fragment>
     );
}

export default FormBarbecueAcomp;