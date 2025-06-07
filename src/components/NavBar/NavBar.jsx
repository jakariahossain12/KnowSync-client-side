import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext, ImgContext } from "../../Context/Context";

const NavBar = () => {
  const { user, userSignOut } = use(AuthContext);
  const { profilePik } = use(ImgContext)
console.log(use?.photoURL);

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
      .then(() => {
      
      })
      .catch(() => {
      
    })
  }

  return (
    <div className="navbar bg-transparent shadow-sm">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-primary logo font-bold">
          KnowSync
        </a>
      </div>
      <div className="navbar-end flex gap-8">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        {user ? (
          <div className="relative inline-block group">
            (
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                <img src={user && user?.photoURL || profilePik} />
              </div>
            </div>
            )
            <div className="absolute left-12 w-48 mt-0 hidden  bg-white border border-gray-200 rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 group-hover:-left-40  group-hover:block">
              <div className="font-semibold text-text mb-2">
                {user && user?.displayName}
              </div>
              <button
                onClick={handleSignOut}
                className="w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
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
    </div>
  );
};

export default NavBar;
