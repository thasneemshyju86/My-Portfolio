import React, {useRef} from 'react';
import './contact.css';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = ()=>{
   
    // to link email with contact form using emailjs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // const SCOPES = 'https://www.googleapis.com/auth/gmail.send';
        // emailjs.init('rx9tcgAk12EiCR6gx', SCOPES)
    
        emailjs
          .sendForm('service_536uc7l', 'template_hkkulnk', form.current, {
            publicKey: 'rx9tcgAk12EiCR6gx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }
return(
   <section className='contactSection'>
        <h1 className='contact' id='contactMe'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any job opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'/>
            <input type='email' className='email' placeholder='Your Email' name='from_email'/>
            <textarea className='msg' name='message' rows='6' placeholder='Your Message'/>
<button type='submit' value='send' className='submitBtn' onClick={()=>'Email sent successfully'}>Submit </button>
        </form>
        <footer className='links'>
           <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/thasneemshyju/")} className='linkedin'/>
            <FaGithub onClick={()=>window.open("https://github.com/thasneemshyju86")}  className='github'/>

        </footer>
  </section>
)
}
export default Contact