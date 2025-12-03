import React from "react";
import { FaHeartbeat, FaShieldAlt, FaSnowflake } from "react-icons/fa";

const WinterCare = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
          <div className="flex justify-center mb-4"> <FaSnowflake className="text-4xl text-blue-500"></FaSnowflake> </div>
          <h3 className="text-xl font-bold mb-2">Keep Them Warm</h3>
          <p className="text-sm text-gray-600">Ensure your pet has a warm, draft-free place to sleep. Consider pet sweaters for short-haired breeds.</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
          <div className="flex justify-center mb-4"><FaShieldAlt className="text-4xl text-green-500"></FaShieldAlt></div>
          <h3 className="text-xl font-bold mb-2">Protect Their Paws</h3>
          <p className="text-sm text-gray-600">Apply paw balm before walks and wipe paws after to remove ice-melting chemicals.</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
          <div className="flex justify-center mb-4"><FaHeartbeat className="text-4xl text-red-500"></FaHeartbeat></div>
          <h3 className="text-xl font-bold mb-2">Monitor Health</h3>
          <p className="text-sm text-gray-600">Watch for signs of hypothermia and frostbite. Keep up with regular vet checkups.</p>
        </div>
      </div>
    </div>
  );
};

export default WinterCare;
