import React, { Fragment, useState } from 'react';
import './style.css'

function FormBarbecueInfo() {

    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    function handleCounterButtonClick(e) {
        const id = e.target.attributes.id.value
        switch (id) {
            case "male-sub":
                setMaleCount(maleCount - 1)
                break;
            case "male-add":
                setMaleCount(maleCount + 1)
                break;
            case "female-sub":
                setFemaleCount(femaleCount - 1)
                break;
            case "female-add":
                setFemaleCount(femaleCount + 1)
                break;
            case "child-sub":
                setChildCount(childCount - 1)
                break;
            case "child-add":
                setChildCount(childCount + 1)
                break;
        
            default:
                console.log("deu ruim")
                break;
        }
        console.log(id)
    }

    return ( 
        <Fragment>
            <h5 id='title'>GUESTS</h5>
            <p className='subtitle'>Tell us more about the people you invited so we can precisely calculate the amount of meat</p>

            <hr className='line'/>

            <div id='counters-area-conteiner'>
                <div className='label-img-counter-conteiner'>
                    <h2>M</h2>
                    <div className='counter-div'>
                        <button disabled={maleCount <= 0} onClick={handleCounterButtonClick} id='male-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(maleCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='male-add' className='counter-buttons add'>+</button>
                    </div> 
                    <h6 className='button-title'>MALE</h6>
                </div>

                <div className='label-img-counter-conteiner'>
                    <h2>F</h2>
                    <div className='counter-div'>
                        <button disabled={femaleCount <= 0} onClick={handleCounterButtonClick} id='female-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(femaleCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='female-add' className='counter-buttons add'>+</button>
                    </div> 
                    <h6 className='button-title'>FEMALE</h6>
                </div>                 

                <div className='label-img-counter-conteiner'>
                    <h2>C</h2>
                    <div className='counter-div'>
                        <button disabled={childCount <= 0} onClick={handleCounterButtonClick} id='child-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(childCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='child-add' className='counter-buttons add'>+</button>
                    </div> 
                    <h6 className='button-title'>CHILDREN</h6>
                </div>
            </div>
        </Fragment>
     );
}

export default FormBarbecueInfo;