import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import LoadingScreen from '../../loadingScreen';
import './style.css';

function FormBarbecueResult(props) {
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        function calculateTotal() {
            let menMeat = props.numberMen * 500;
            let womenMeat = props.numberWomen * 400;
            let childrenMeat = props.numberChildren * 250;
            let totalMeat = menMeat + womenMeat + childrenMeat;
    
            return totalMeat;
        }

        setResult(calculateTotal())

    }, [props.numberMen, props.numberWomen, props.numberChildren])

    return ( 
        <Fragment>
            <div id='result-card-conteiner'>
                <p>{result}</p>
            </div>
        </Fragment>
     );
}

export default FormBarbecueResult;