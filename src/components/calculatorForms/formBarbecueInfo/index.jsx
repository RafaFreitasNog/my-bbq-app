import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import './style.css'

function FormBarbecueInfo(props) {

    const [maleCount, setMaleCount] = useState(props.saveMale);
    const [femaleCount, setFemaleCount] = useState(props.saveFemale);
    const [childCount, setChildCount] = useState(props.saveChildren);

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

    useEffect(() => {
        props.setNumberMen(maleCount)
        props.setNumberWomen(femaleCount)
        props.setNumberChildren(childCount)
    }, [maleCount, femaleCount, childCount])

    return ( 
        <Fragment>
            <h5 id='title'>GUESTS</h5>
            <p className='subtitle'>Tell us more about the people you invited so we can precisely calculate the amount of meat</p>

            <hr className='line'/>

            <div id='counters-area-conteiner'>
                <div className='label-img-counter-conteiner'>
                    <h6 className='button-title'>MALE</h6>
                    <h2>M</h2>
                    <div className='counter-div'>
                        <button disabled={maleCount <= 0} onClick={handleCounterButtonClick} id='male-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(maleCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='male-add' className='counter-buttons add'>+</button>
                    </div> 
                </div>

                <div className='label-img-counter-conteiner'>
                    <h6 className='button-title'>FEMALE</h6>
                    <h2>F</h2>
                    <div className='counter-div'>
                        <button disabled={femaleCount <= 0} onClick={handleCounterButtonClick} id='female-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(femaleCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='female-add' className='counter-buttons add'>+</button>
                    </div> 
                </div>                 

                <div className='label-img-counter-conteiner'>
                    <h6 className='button-title'>CHILDREN</h6>
                    <h2>C</h2>
                    <div className='counter-div'>
                        <button disabled={childCount <= 0} onClick={handleCounterButtonClick} id='child-sub' className='counter-buttons sub'>-</button>
                        <div className='counter'><h6>{String(childCount).padStart(2, '0')}</h6></div>
                        <button onClick={handleCounterButtonClick} id='child-add' className='counter-buttons add'>+</button>
                    </div> 
                </div>
            </div>
        </Fragment>
     );
}

export default FormBarbecueInfo;