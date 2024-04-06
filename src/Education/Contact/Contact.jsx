import React, {useRef, useState} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {
  FaMailBulk,
  FaEnvelope,
  FaEnvelopeOpen,
  FaPhone,
  FaMap,
  FaLocationArrow,
} from "react-icons/fa";
import {
  FormControl,
  TextField,
  Grid,
  Button,
  FormControlLabel,
} from "@mui/material";
const Contact = () => {
  const form = useRef();
  const result = useRef();
  const[res]= useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hmhmjdo', 'template_uazi2if', form.current, {
        publicKey: 'itZqWuLC3b5kNaAE-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
       var time =   setTimeout(()=>{
             
            result.current.innerHTML ='SUCCESS. Email sent successfully'
          },3000);

          return ()=>{
          clearTimeout(time, 1000)
          }
       
        },
       
        (error) => {
          console.log('FAILED...', error.text);
          result.current.innerHTML ='ERRRO. Email not sent'

        },
      );
  };
  return (
    <div className="contact containers">
      <div className="contact-col">
        <h3>
          Send us a mesage &nbsp; <FaEnvelope color="orange" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestionss are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <FaEnvelope /> &nbsp; Contact@jexzyjames@gmail.com
          </li>
          <li>
            <FaPhone /> &nbsp; +234-7045 666 940
          </li>
          <li>
            <FaLocationArrow /> &nbsp; High Rise B, <br /> &nbsp; Univeristy of
            Lagos, Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form
        ref={form}
        onSubmit={sendEmail}
        
          sx={{
            margin: "20px 0",
            padding: "1rem",
            width:'80%',
            resize: "none",
          }}
          margin="20px 0"
          fullWidth
        >
          {/* <FormControlLabel/> */}
          <label htmlFor="name">Your Name</label>
          <TextField
            sx={{
              margin: "20px 0",

            }}
            fullWidth
            color="secondary"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <TextField
            sx={{
              margin: "20px 0",
            }}
            fullWidth
            type="tel"
            color="secondary"
            placeholder="Enter your mobile"
            name="phone"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            style={{
              background: "#EBECFE",
              border: "0",
              outline: "0",
              width:'100%',
              padding: "15px",
            }}
            name="message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>
          <Button
          type="submit"
            sx={{
              margin: "20px 0",
            }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit now
          </Button>
          <span ref={result}></span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
