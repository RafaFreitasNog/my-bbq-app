import React, { Fragment } from 'react';
import './style.css'

function FormBarbecueAcomp() {
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
                        <input type="radio" id='yes' name='acompanhamentos' value='YES'/>
                        <label htmlFor="yes" className='radio-input-label'>Yes</label>
                    </div>
                    <div className='radio-input second'>
                        <input type="radio" id='no' name='acompanhamentos' value='NO'/>
                        <label htmlFor="no" className='radio-input-label'>No</label>
                    </div>
                </div>
            </form>
        </Fragment>
     );
}

export default FormBarbecueAcomp;