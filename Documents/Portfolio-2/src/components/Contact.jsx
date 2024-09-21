import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    // Replace with your Formspree endpoint
    const endpoint = 'https://formspree.io/f/mpwazbnv';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-2 px-4 mx-auto max-w-screen-md mt-40 mb-40">
      <h3 className="text-4xl text-center font-semibold">
       Contact<span className="text-cyan-600">Me</span>
       </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-row">
          <div className="w-1/2 pr-2">
            <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="lastName" className="block my-2 text-left text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block my-2 text-left text-sm font-medium text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block my-2 text-left text-sm font-medium text-white">
            Your message
          </label>
          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
            placeholder="Query/Suggestion..."
          />
        </div>

        <button
          type="submit"
          className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-green-600 hover:scale-105"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
