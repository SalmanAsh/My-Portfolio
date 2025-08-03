import React from 'react';

import Swal from 'sweetalert2'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Button, Form, FieldMess, GridContainer, InputBox, Field } from './ContactStyles';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for getting in touch.",
        icon: "success",
      });
    }
  };

const Contact = (props) => (

  
  <Section id="contact">
    <SectionDivider/>
    <SectionTitle>Get In Touch</SectionTitle>
    <GridContainer>
      <Form onSubmit={onSubmit}>
        <h2 style={{fontSize: '30px', textAlign: 'center'}}>Contact Form</h2>

        <InputBox>
          <label>Full Name</label>
          <Field name='name' type='text' placeholder='Enter your name' required></Field>
        </InputBox>

        <InputBox>
          <label>Email Address</label>
          <Field name='email' type='email' placeholder='Enter your email' required></Field>
        </InputBox>

        <InputBox>
          <label>Your Message</label>
          <FieldMess name='message' type='text' placeholder='Enter your message' required></FieldMess>
        </InputBox>

        <Button type='submit'>Send Message</Button>

      </Form>
    </GridContainer>
  </Section>
);

export default Contact;