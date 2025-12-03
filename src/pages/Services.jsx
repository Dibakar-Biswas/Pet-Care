import React, { use, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const categoryPromise = fetch("/pet.json").then((res) => res.json());

const Services = () => {
  const fetchCategories = use(categoryPromise);
  const [categories, setCategories] = useState(fetchCategories);
  const [sortOrder, setSortOrder] = useState("default");
  const [priceFilter, setPriceFilter] = useState("all");

  const handleSort = (order) => {
    setSortOrder(order);

    let sortedCategories = [...categories];

    if (order === "ascending") {
      sortedCategories.sort((a, b) => a.rating - b.rating);
    } else if (order === "descending") {
      sortedCategories.sort((a, b) => b.rating - a.rating);
    } else {
      sortedCategories = fetchCategories;
    }

    setCategories(sortedCategories);
  };

  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);

    let filteredCategories = [...fetchCategories];

    if (filter === "high") {
      filteredCategories = filteredCategories.filter((item) => item.price > 30);
    } else if (filter === "low") {
      filteredCategories = filteredCategories.filter((item) => item.price <= 30);
    }

    setCategories(filteredCategories);
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-5">
        Popular Winter Care Services
      </h2>
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
        <label htmlFor="sortRating" className="font-medium text-secondary mb-2">
          Sort by Rating
        </label>
        <select
          id="sortRating"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="select select-bordered select-sm"
        >
          <option value="default">Default</option>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>
      <div className="flex flex-col">
            <label htmlFor="priceFilter" className="font-medium text-secondary mb-2">
              Filter by Price
            </label>
            <select
              id="priceFilter"
              value={priceFilter}
              onChange={(e) => handlePriceFilter(e.target.value)}
              className="select select-bordered select-sm"
            >
              <option value="all">All Prices</option>
              <option value="low">$30 or Less</option>
              <option value="high">More than $30</option>
            </select>
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {categories.map((category) => (
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

export default Services;
