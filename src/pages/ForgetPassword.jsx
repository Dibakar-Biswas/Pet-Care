import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      window.open("https://mail.google.com", "");
    }
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <fieldset className=" fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-neutral mt-4">Reset Password</button>
            <Link to="/auth/login" className="text-center mt-2 link link-hover">Back to Login</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
