import React, { useState } from 'react'
import styled from 'styled-components'
import separator from '../assets/separator.png'
import axios from 'axios'
import {toast} from 'react-toastify'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData,[name]: value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://formspree.io/f/mleyeklo",formData, {
        headers: {
          'Accept': 'application/json'
        }
      })
      if(response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        toast.success('Successfully submitted thank you');
      }
      setIsSubmitting(false);
    } catch (error) {
      toast.error(error);
      setIsSubmitting(false);
    }
  }

  return (
    <Wrapper id='contact' className='section'>
      <h2 className='title'>contact()</h2>
      <p>
         <span>Let's Get in Touch!</span><br />
         Feel free to reach out to me using the contact information below. I'm excited to connect and discuss potential opportunities.
      </p>
     <img src={separator} alt="separator" />
     <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter Your Name*'  className='form-input' value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder='Enter Your Email*'  className='form-input' value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder='Phone Number'  className='form-input' value={formData.phone} onChange={handleChange} required />
        <textarea name="message" placeholder='Your Message*' cols="30" rows="10" className='form-textarea' value={formData.message} onChange={handleChange} required />
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
     </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 0 2rem;
  p {
    margin: 0 auto;
    max-width: 30em;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 2rem;
    span {
      font-weight: 600;
      font-size: 20px;
    }
  }
  form {
    width: 100%;
    max-width: 600px;
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    display: block;
    padding: 0.375rem 0.75rem;
    background: transparent;
    margin-bottom: 3rem;
    border: none;
    border-bottom: 5px solid var(--black);
    border-left: 5px solid var(--black);
    outline: none;
    resize: none;
    &::placeholder {
      color: #8B8B8B;
      font-family: var(--headingFont);
      font-size: 14px;
      letter-spacing: 0.56px;
      text-transform: uppercase;
    }
  }
  button {
    background: transparent;
    letter-spacing: 1.6px;
    font-family: var(--headingFont);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    padding: 6px 40px;
    border: none;
    border-left: 3px solid var(--black);
    border-right: 3px solid var(--black);
  }
`
export default Contact