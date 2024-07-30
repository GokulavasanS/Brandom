import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Chatbot from './Chatbot';
import './Contact.css';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formState.name) errors.name = 'Name is required';
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formState.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormState({ name: '', email: '', message: '' });
        setShowForm(false);
      }, (error) => {
        setErrors({ api: 'Failed to send message, please try again later.' });
      });
  };

  return (
    <div className="contact-page">
      <h1>Let's Talk</h1>
      {!(showForm || showChatbot) && (
        <div className="cards">
          <div className="card">
            <img src="src/Pages/ContactUs/phone-icon.svg" alt="Phone" />
            <h3>Phone</h3>
            <p>Your contact number</p>
            <div className="no-details"></div>
            <button className="btn">request a call</button>
          </div>
          <div className="card" onClick={() => setShowForm(true)}>
            <img src="src/Pages/ContactUs/mail.svg" alt="E-mail" />
            <h3>E-mail</h3>
            <p>Just send your query by using our mail and we will give you the help you need</p>
            <button className="btn">Send Email</button>
          </div>
          <div className="card">
            <img src="src/Pages/ContactUs/chatbot.svg" alt="ChatBot" />
            <h3>ChatBot</h3>
            <p>Chat with our chatbot for instant answers regarding any queries you have</p>
            <button className="btn" onClick={() => setShowChatbot(true)}>Chat Here</button>
          </div>
        </div>
      )}
      {showForm && (
        <div className="form-container">
          <button className="back-btn" onClick={() => setShowForm(false)}>Back</button>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <h3>Your Message</h3>
              <textarea
                name="message"
                className="message"
                value={formState.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
              <div className="button">
                <button type="submit" className="submit">Submit</button>
              </div>
              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </div>
        </div>
      )}
      {showChatbot && <Chatbot setShowChatbot={setShowChatbot} />}
    </div>
  );
};

export default Contact;
