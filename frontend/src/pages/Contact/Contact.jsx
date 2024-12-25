import React from 'react'
import './Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <div className='contactContainer'>
        <div className='contactHelp'>
          We're here to help
        </div>

        <div className='contactContactInfo'>
          <div className='contactInfoStyle'>
            <div className='contactInsideInfoStyle'>
              <div className='contactLineInfoStyle'>
                <div className='contactInfoHeader'>
                  <div className='contactIconPadding contactIconLocation'>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#990033" }} className='contactIcon contactIconLocation' />
                  </div>
                  <h3>Working Country</h3>
                </div>
                <div className='contactTextPadding'>
                  India, USA, Canada, Europe, the Middle East and Russia
                </div>
              </div>
            </div>
          </div>
          <div className='contactInfoStyle'>
            <div className='contactInsideInfoStyle'>
              <div className='contactInfoHeader'>
                <div className='contactIconPadding contactIconClock'>
                  <FontAwesomeIcon icon={faClock} flip="horizontal" style={{ color: "#0abf53" }} className='contactIcon' />
                </div>
                <h3>Opening Hours</h3>
              </div>
              <div className='contactTextPadding'>
                Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm
              </div>
            </div>
          </div>
          <div className='contactInfoStyle'>
            <div className='contactInsideInfoStyle'>
              <div className='contactInfoHeader'>
                <div className='contactIconPadding contactIconEnvelope'>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: "#6168ff" }} className='contactIcon' />
                </div>
                <h3>Contact Info</h3>
              </div>
              <div className='contactTextPadding'>
                info@virgomediatech.com
              </div>
            </div>
          </div>
        </div>

        <div className='contactFormText'>
          <div className='contactFormTextText'>
            Leave a message and we will get back to you.
          </div>
          <div className='contactFormContainer'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact