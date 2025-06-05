import React from 'react';
import { NavLink } from 'react-router';
import './NavBar.css'

const NavBar = () => {
    
    
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end flex gap-8">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className=" ">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    );
};

export default NavBar;