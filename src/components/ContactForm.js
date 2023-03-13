import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css";

function ContactForm () {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
  
		emailjs.sendForm('service_lxcrq3b', 'template_ikx9fmy', form.current, 'RwKthIeRslk1hdQte')
		  .then((result) => {
				console.log(result.text);
				e.target.reset();
		  }, (error) => {
				console.log(error.text);
		  });
	 };

	return (
		<div className='contact-wrapper'>
			<form className="contact-form" ref={form} onSubmit={sendEmail}>
				<input className="contact-input" type="text" name="user_name" placeholder="Enter your name"/>
				<input className="contact-input" type="email" name="user_email" placeholder="Enter your email"/>
				<textarea className="contact-text" name="message" cols="30" rows="10" placeholder="Type your message here"/>
				<input className="contact-btn" type="submit" value="Send"/>
			</form>
		</div>
	)
}

export default ContactForm;