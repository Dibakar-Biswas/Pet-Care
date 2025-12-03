import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for contacting us! We will respond within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">We're here to help you and your pets</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaPhone className="text-3xl text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-gray-600">(555) 123-4567</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaEnvelope className="text-3xl text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-600">support@warmpaws.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaMapMarkerAlt className="text-3xl text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-600">123 Pet Care Lane</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaClock className="text-3xl text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-sm text-gray-600">Mon-Fri: 8AM-8PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What are your emergency hours?</h3>
              <p className="text-gray-600">We offer 24/7 emergency support for winter-related pet emergencies. Call (555) 123-4567.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How often should I groom my pet in winter?</h3>
              <p className="text-gray-600">We recommend grooming every 4-6 weeks during winter to maintain a healthy coat.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Do you offer home visits?</h3>
              <p className="text-gray-600">Yes, we provide in-home consultations and services. Contact us to schedule an appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;