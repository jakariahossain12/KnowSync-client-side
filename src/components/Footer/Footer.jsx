import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className="">
        <footer className="footer grid grid-cols-1 md:grid-cols-3 justify-center items-center  sm:footer-horizontal bg-base-200 text-base-content p-10 border-t border-base-300">
          <aside>
            <img className="w-50 h-50" src="/logo2.png" alt="" />
            
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className=" ">Branding</a>
            <a className="">Design</a>
            <a className="">Marketing</a>
            <a className="">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="">About us</a>
            <a className="">Contact</a>
            
            <a className="">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="">Terms of use</a>
            <a className="">Privacy policy</a>
            <a className="">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;