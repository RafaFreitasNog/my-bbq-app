import { Fragment } from 'react'
import './style.css'

function MainSection() {
    return (
        <Fragment>
            <div className='grid'>
                <div id='card1' className='card'></div>
                <div id='card2' className='card'></div>
                <div id='card3' className='card'></div>
                <div id='main-section-conteiner'>
                    <h3 id='oi'>Calcule o seu churrasco!</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default MainSection;