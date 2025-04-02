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
    <section id="contact" className="py-16 px-6 mx-auto max-w-2xl text-white">
      <h3 className="text-4xl text-center font-semibold mb-6">
        Contact <span className="text-cyan-600">Me</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-row gap-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block text-sm font-medium text-cyan-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block text-sm font-medium text-cyan-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
              placeholder="Enter Last Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-600">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
            placeholder="abc@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-600">Your Message</label>
          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
            placeholder="Query/Suggestion..."
          />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 w-full text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
