import React, {useState} from 'react'

import './Contact.css';

import emailjs from 'emailjs-com'

const {REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID} = process.env;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  }

  const emailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  } 

  const messageOnChangeHandler = (event) => {
    setMessage(event.target.value);
  }
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, e.target, REACT_APP_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text)
          resetForm();
          alert("The message has sent to Tamas!")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }


  return (
    <section id="contact">
      <h1>CONTACT</h1>
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='hidden' name='contact_number'/>
        <label>Name:</label>
        <input type='text' name='user_name' value={name} onChange={nameOnChangeHandler}/>
        <label>Email:</label>
        <input type='email' name='user_email' value={email} onChange={emailOnChangeHandler}/>
        <label>Message:</label>
        <textarea name='message' value={message} onChange={messageOnChangeHandler}/>
        <input type='submit' value='Send' />
      </form>
    </section>
  )
}

export default Contact
