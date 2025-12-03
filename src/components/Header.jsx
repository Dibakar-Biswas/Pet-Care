import React, { use } from "react";
import { IoPawSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    // console.log("user trying to logOut");
    logOut()
      .then(() => {
        toast.success("You Logged out successfully");
        navigate('/')
      })
      .catch((error) => {
        toast("Something is Wrong", error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className="btn btn-secondary btn-sm mb-1" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="btn btn-secondary btn-sm mb-1" to="/services">All Pets</NavLink>
            </li>
            {user && <li>
            <NavLink className="btn btn-secondary btn-sm mb-1" to="/profile">My Profile</NavLink>
          </li>}
          <li>
            <NavLink className="btn btn-secondary btn-sm mb-1" to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink className="btn btn-secondary btn-sm mb-1" to="/about">About Us</NavLink>
          </li>
          {user ? 
            <NavLink className="btn btn-secondary btn-sm" onClick={handleLogOut}>LogOut</NavLink>
            :
            <NavLink to="/auth/login" className="btn btn-secondary btn-sm">Login</NavLink>
          }

          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-secondary">
          <IoPawSharp />
          WarmPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {/* <div>{user && user.email}</div> */}
          <li>
            <NavLink className="btn btn-secondary btn-sm" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="btn btn-secondary btn-sm" to="/services">All Pets</NavLink>
          </li>
          {user && <li>
            <NavLink className="btn btn-secondary btn-sm" to="/profile">My Profile</NavLink>
          </li>}
          <li>
            <NavLink className="btn btn-secondary btn-sm" to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink className="btn btn-secondary btn-sm" to="/about">About Us</NavLink>
          </li>
          {user ? (
          <button className="btn btn-secondary btn-sm" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <div className="space-x-3">
            <Link to="/auth/login" className="btn btn-secondary btn-sm">
              Login
            </Link>
          </div>
        )}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* <img
          className="w-10 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        <div /> */}
        {user ? (
          <div
            className="tooltip tooltip-left"
            data-tip={user?.displayName || "User"}
          >
            <img
              className="w-10 h-10 rounded-full cursor-pointer ring ring-primary ring-offset-2"
              src={user.photoURL}
              alt="User Avatar"
            />
          </div>
        ) : (
          <img
            className="w-10 h-10 rounded-full"
            src={userIcon}
            alt="Default User"
          />
        )}

        {/* {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary btn-sm">
            LogOut
          </button>
        ) : (
          <div className="space-x-3">
            <Link to="/auth/login" className="btn btn-secondary btn-sm">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-secondary btn-sm hide-on-xs">
              Register
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
