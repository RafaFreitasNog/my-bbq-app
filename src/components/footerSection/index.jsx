import { Fragment } from 'react'
import './style.css'

function Footer() {
    return (
        <Fragment>
            <div id='footer-conteiner'>
                <h6 className='h6-footer'>Developed by: </h6>
                <h6 className='h6-footer'>Raphael Freitas Nogueira de Souza</h6>
                <h6 className='h6-footer'>E-mail: raphaelfreitas18.dev@gmail.com</h6>
                <h6 className='h6-footer'>Phone number: +55 (11) 975767307</h6>
            </div>
        </Fragment>
    )
}

export default Footer;