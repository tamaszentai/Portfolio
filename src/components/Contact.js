import React from 'react'

import './Contact.css';

import emailjs from 'emailjs-com'

const {REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID} = process.env;

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, e.target, REACT_APP_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }


  return (
    <section id="contact">
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='hidden' name='contact_number' />
        <label>Name:</label>
        <input type='text' name='user_name' />
        <label>Email:</label>
        <input type='email' name='user_email' />
        <label>Message:</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
    </section>
  )
}

export default Contact
