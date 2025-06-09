import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext, ImgContext } from "../../Context/Context";

const NavBar = () => {
  const { user, userSignOut } = use(AuthContext);
  const { profilePik } = use(ImgContext);
  const [show, setShow] = useState(false);
  console.log(use?.photoURL);
  console.log(show);
  console.log(profilePik);

  const link = (
    <>
      <li className="font-bold text-text hover:text-primary">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-bold text-text hover:text-primary">
        <NavLink to={"/all-articles"}>All Articles</NavLink>
      </li>
      <li className="font-bold text-text hover:text-primary">
        <NavLink to={"/my-articles"}>My Articles</NavLink>
      </li>
      <li className="font-bold text-text hover:text-primary">
        <NavLink to={"/post-article"}>Post Article</NavLink>
      </li>
      <li className="font-bold text-text hover:text-primary">
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="navbar bg-transparent shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className=" text-3xl text-primary logo font-bold">KnowSync</a>
      </div>
      <div className="navbar-end flex gap-8">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        {user ? (
          <div className="relative inline-block">
            <div
              className="avatar cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                <img src={user?.photoURL || profilePik} alt="User Avatar" />
              </div>
            </div>

            {show && (
              <div className="absolute space-y-3 right-0 w-48 mt-2 bg-background border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                <div className="font-bold text-text mb-2">
                  {user?.displayName}
                </div>
                <div>
                  <ul>
                    <li className="font-bold text-text hover:text-primary">
                      <NavLink to={"/my-articles"}>My Articles</NavLink>
                    </li>
                    <li className="font-bold text-text hover:text-primary">
                      <NavLink to={"/post-article"}>Post Article</NavLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setShow(false); // Close after sign out
                    }}
                    className="w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className=" ">
            <Link
              to={"/login"}
              className="btn btn-primary font-bold hover:scale-105 transition-transform duration-200"
            >
              Login
            </Link>
          </div>
        )}
      </div>
      <label className="swap swap-rotate ml-4">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="dark" />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};

export default NavBar;
