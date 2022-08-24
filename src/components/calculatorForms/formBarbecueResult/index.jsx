import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import './style.css';

function FormBarbecueResult(props) {
    const [result, setResult] = useState(0);
    const [menResult, setMenResult] = useState(0);
    const [womenResult, setWomenResult] = useState(0);
    const [childrenResult, setChildrenResult] = useState(0);
    

    useEffect(() => {
        function calculateTotal() {
            let menMeat = 0
            let womenMeat = 0
            let childrenMeat = 0

            if (props.isThereFood === "true") {
                menMeat = props.numberMen * 400
                womenMeat = props.numberWomen * 300
                childrenMeat = props.numberChildren * 150
            } 
            if (props.isThereFood === "false") {
                menMeat = props.numberMen * 500
                womenMeat = props.numberWomen * 400
                childrenMeat = props.numberChildren * 250
            }
            
            let totalMeat = menMeat + womenMeat + childrenMeat;
            
            setMenResult(menMeat)
            setWomenResult(womenMeat)
            setChildrenResult(childrenMeat)
            setResult(totalMeat)
        }

        calculateTotal()
    }, [props.isThereFood, props.numberMen, props.numberWomen, props.numberChildren])

    return ( 
        <Fragment>
            <div id='result-card-conteiner'>
                <div id='result-card-title-div'>
                    <h5 id='result-title' className='title'>{props.barbecueName}</h5>
                    <p id='result-subtitle' className='subtitle'>by: {props.userName}</p>
                </div>

                <hr className='line line-result'/>

                <div id='result-card-body-div'>
                    <p className='subtitle body-txt table-title'>Men...</p>
                    <p className='subtitle body-txt table-value'>...{menResult} Kg</p>
                    
                    <p className='subtitle body-txt table-title'>Women...</p>
                    <p className='subtitle body-txt table-value'>...{womenResult} Kg</p>

                    <p className='subtitle body-txt table-title'>Children...</p>
                    <p className='subtitle body-txt table-value'>...{childrenResult} Kg</p>

                    <h6 className='body-txt table-title'>Total...</h6>
                    <h6 className='body-txt table-value'>...{result} Kg</h6>
                </div>
            </div>
        </Fragment>
     );
}

export default FormBarbecueResult;