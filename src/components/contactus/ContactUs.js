import React from 'react'
import './contactus.css'
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContactUs() {
    return (
        <div>
            <div className='uppersection'>

                Contact Us
            </div>
            <div className='getintouchsection'>
                <div className='getintouchleft'>
                    <div className='getintouchform'>
                        <div className='getintouch'>Get In Touch</div>
                        <div className='span1'>Varanasi,Uttar Pradesh,India 221005</div>
                        <div className='span2'>global.techify.info@gmail.com</div>
                        <div className='span3'>9651609214</div>
                   <div>
                  <Form/>
                   </div>
                    </div>
                </div>
                <div className='getintouchright'></div>
            </div>
            <div className='location'>
                location
            </div>
            <div className='subscribeform'>
                subscribeform
            </div>
        </div>
    )
}

export default ContactUs
