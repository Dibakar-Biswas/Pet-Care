import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            console.log(res)
            setUser(res.user);
            navigate("/");
            toast.success("Registration Successful")
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.message);
        })
      }
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters!!");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log({ name, email, photo, password });

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
    //   console.log("password did not match");
      setPassError("Password should be 6 character or longer and must contain one upperCase and one lowerCase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        toast.success("Registered in successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);

    

    


  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register into your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter Your Name"
              required
            />

            {nameError && <p className="text-xs text-red-600">{nameError}</p>}

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              {passError && <p className="text-xs text-red-600">{passError}</p>}
              <button
                onClick={handleTogglePassword}
                className="btn btn-xs absolute top-2 right-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <button type="button" onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <FcGoogle />
              Login with Google
            </button>
            <p className="font-semibold text-center">
              Already have an account?{" "}
              <Link className="font-semibold text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
