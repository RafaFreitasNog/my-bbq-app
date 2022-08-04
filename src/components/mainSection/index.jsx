import { Fragment } from 'react'
import './style.css'

function MainSection() {
    return (
        <Fragment>
            <div className='grid'>
                <div id='card-1' className='card'>
                    <h5 className='card-title white '>But... Why?</h5>
                    <p className='card-text white'>It's important to plan your barbecue and calculated the amount of meat you will need in order to stop food waste and unnecessary spending.</p>
                </div>
                <div id='card-2' className='card'>
                    <h5 className='card-title white '>Okay, How?</h5>
                    <p className='card-text white'>Our app uses an algorithm to tell the ideal amount of meat for your bbq, based on the number and type of people there will be such as men, women or children...</p>
                </div>
                <div id='card-3' className='card'>
                    <h5 className='card-title white '>Let's get started!</h5> 
                    <p className='card-text white'>Liked the idea? So click here and start planning your next barbecue party!</p>
                </div>

                <div id='main-section-conteiner'>
                    <h3 id='oi'>Calcule o seu churrasco!</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default MainSection;