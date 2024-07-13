import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_USER_ID = '7-yHBsVi2LPGyU64C';
const EMAILJS_TEMPLATE_ID = 'template_qbm1cyi';
const EMAILJS_SERVICE_ID = 'service_5w6cf7y';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then((response) => {
        console.log('Email sent:', response);
        alert('Email successfully sent!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-2xl text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Me</h2>
            <p className="font-medium text-md text-secondary md:text-lg">Feel free to get in touch with me for any inquiries or collaborations!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full mb-8 px-4">
                <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                <textarea id="message" value={formData.message} onChange={handleInputChange} className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
              </div>
              <div className="w-full px-4">
                <button type="submit" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
