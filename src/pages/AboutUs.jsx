import React from 'react';
import { IoPawSharp } from 'react-icons/io5';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <IoPawSharp className="text-6xl text-secondary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About WarmPaws</h1>
          <p className="text-xl text-gray-600">Your trusted partner in pet winter care</p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2018, WarmPaws started with a simple mission: to help pets stay safe, warm, and healthy during the cold winter months. What began as a small veterinary clinic has grown into a comprehensive winter pet care service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we serve thousands of pet owners, offering specialized services including winter grooming, nutrition planning, heated shelter solutions, and emergency cold weather care.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Compassion</h3>
              <p className="text-gray-700">We treat every pet with love and care.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Expertise</h3>
              <p className="text-gray-700">Specialized knowledge in winter pet care.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Safety</h3>
              <p className="text-gray-700">Your pet's wellbeing is our top priority.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Excellence</h3>
              <p className="text-gray-700">We strive for the best in every service.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-1">5000+</h3>
              <p>Happy Pets</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">6+</h3>
              <p>Years</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">50+</h3>
              <p>Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">98%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;