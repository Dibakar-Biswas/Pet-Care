import React from "react";
import { toast } from "react-toastify";

const BookForm = () => {
  const handleBooking = (e) => {
    e.preventDefault();

    toast.success("Pet service booked successfully");
    e.target.reset();
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl items-center">
        <form onSubmit={handleBooking} className="card-body">
          <h2 className="text-2xl text-red-500 text-center font-bold">
            Book Your Pet Service
          </h2>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Your Email"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Book
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
