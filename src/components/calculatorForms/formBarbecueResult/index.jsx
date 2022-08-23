import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import LoadingScreen from '../../loadingScreen';
import './style.css';

function FormBarbecueResult(props) {
    const [result, setResult] = useState(0);
    

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

            setResult(totalMeat)
        }

        calculateTotal()
    }, [props.isThereFood, props.numberMen, props.numberWomen, props.numberChildren])

    return ( 
        <Fragment>
            <div id='result-card-conteiner'>
                <div id='result-card-title-div'>
                    <h5 id='result-title'>blablablabl</h5>
                    <p id='result-subtitle'>blblblbl</p>
                </div>
                <div id='result-card-body-div'>
                    <h6 className='body-txt'>Meat Weight: </h6>
                    <h6 className='body-txt'>{result}</h6>
                    <p>{props.isThereFood}</p>
                </div>
            </div>
        </Fragment>
     );
}

export default FormBarbecueResult;