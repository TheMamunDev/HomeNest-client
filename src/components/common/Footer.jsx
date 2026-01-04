import React from 'react';
import { Link } from 'react-router';
import {
  FaBeer,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="py-10 navbar-card-bg">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-11/12 gap-6">
          <aside className="w-full">
            <Link to="/" className="text-xl font-bold">
              <span className="text-2xl font-bold text-secondary">
                Home<span className="text-primary">Nest</span>
              </span>
            </Link>
            <p className="mt-3 text-base-300 max-w-xs opacity-80">
              HomeNest is your trusted real estate platform. <br />
              Finding your perfect home, simplified.
            </p>
          </aside>

          <nav className="w-full text-secondary ">
            <h6 className="footer-title opacity-100 text-lg ">Contact Us</h6>
            <p className="link link-hover opacity-70">
              Email: info@homenest.com
            </p>
            <p className="link link-hover opacity-70">
              Phone: +1 (555) 123-4567
            </p>
            <p className="link link-hover opacity-70">
              Address: 101 Property Way, Realty City, HN 10001
            </p>
          </nav>

          <nav className="w-full text-secondary">
            <h6 className="footer-title text-lg opacity-100">Legal</h6>
            <div className="flex items-center gap-3">
              <Link to="/properties" className="link link-hover opacity-70">
                Properties
              </Link>
              <Link to="/terms-of-uses" className="link link-hover opacity-70">
                Terms of use
              </Link>
              <Link to="/about" className="link link-hover opacity-70">
                About Us
              </Link>
            </div>
          </nav>

          <nav className="text-secondary">
            <h6 className="footer-title text-lg opacity-100">Social</h6>
            <div className="flex flex-wrap justify-start items-center gap-4 text-2xl text-neutral">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-300"
              >
                <FaSquareXTwitter></FaSquareXTwitter>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </nav>
        </div>

        <div className="text-center flex items-center justify-center w-full border-t border-gray-200 pt-6 mt-6 text-secondary opacity-70">
          <p className="text-center">
            Copyright © 2025 - All right reserved by HomeNest Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
