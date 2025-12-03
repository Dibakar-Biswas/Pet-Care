import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
//   console.log(location);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("")


  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.error(errorCode, errorMessage);
        setError(errorCode);
        toast.error("Credentials does not match!!!");
      });
  };


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
        console.log(res)
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("SignIn Successful")
    })
    .catch((error) => {
        console.log(error);
        toast.error(error.message);
    })

  }

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    navigate("/auth/forget-password", { state: { email } });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login into your Account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
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
              <button
                onClick={handleTogglePassword}
                className="btn btn-xs absolute top-2 right-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={handleForgetPassword}
                className="link link-hover cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <button type="button" onClick={handleGoogleSignIn} className="btn cursor-pointer bg-white text-black border-[#e5e5e5]">
              <FcGoogle />
              Login with Google
            </button>
            <p className="font-semibold text-center">
              Don't have an account?{" "}
              <Link className="font-semibold text-red-500" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
