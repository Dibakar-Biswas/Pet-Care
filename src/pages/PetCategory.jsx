import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const categoryPromise = fetch("/pet.json").then((res) => res.json());
const PetCategory = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-5">
        Popular Winter Care Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {categories.slice(0, 8).map((category) => (
          <div
            key={category.serviceId}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.serviceName}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {/* {category.serviceName} */}
                {category.serviceName.length > 20
                  ? category.serviceName.substring(0, 20) + "..."
                  : category.serviceName}
              </h2>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-gray-700 font-medium">
                    {category.rating}
                  </span>
                </div>
                <span className="text-xl font-bold text-indigo-600">
                  ${category.price}
                </span>
              </div>

              <Link
                to={`/pet-details/${category.serviceId}`}
                className="w-full flex justify-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCategory;
