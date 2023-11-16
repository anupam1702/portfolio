import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {

    const [user,setUser]=useState({
      name:'',email:'',subject:'',message:''
    });

    let name,value;
    const handleInput=(e)=>{
      //console.log(e);
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value});
    }

    const postData=async (e)=>{
        e.preventDefault();

        const {name,email,subject,message}=user;

        const res= await fetch('/dat',{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify({
            name,email,subject,message
          })
        })

        const data=await res.json();
        if(data.status===422 ||   !data){
          window.alert("Fill it Correctly");
          
          
        }else{
          window.alert("Thanku for Connecting");
          
        }
    }


  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">anupak144@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91-8295579447</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.instagram.com/anupam9528/" className="contact__social-link">
              <FaInstagram />
            </a>

            <a href="https://google.com" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://github.com/anupam1702" className="contact__social-link">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/anupam-kumar-669b15253/" className="contact__social-link">
            <FaLinkedinIn />
          </a>

            
          </div>
        </div>

        <form method="POST" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input name='name'
                type="text"
                placeholder="Your Name"
                className="form__control"
                autoComplete="off"
                
                value={user.name}
                onChange={handleInput}
              />
            </div>

            <div className="form__input-div">
              <input name="email"
                type="email"
                placeholder="Your email"
                className="form__control"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="form__input-div">
              <input name="subject"
                type="text"
                placeholder="Your Subject"
                className="form__control"
                autoComplete="off"
                value={user.subject}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea name="message" placeholder="Your Message" className="form__control textarea" autoComplete="off" value={user.message} onChange={handleInput}>
            </textarea>
          </div>

  
           <button  className="button" onClick={postData}>
           Send Message
           <span className="button__icon contact__button-icon">
  <FiSend/></span></button> 
        </form>
      </div>
    </section>
  );
};

export default Contact;
