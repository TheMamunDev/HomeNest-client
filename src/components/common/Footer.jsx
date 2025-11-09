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
  const logoStyle = 'text-2xl font-bold text-gray-800';
  const highlightStyle = 'text-primary';
  return (
    <footer className="footer p-10 bg-light-realestate text-base-content ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <aside>
          <Link to="/" className="text-xl font-bold">
            <span className={logoStyle}>
              Home<span className={highlightStyle}>Nest</span>
            </span>
          </Link>
          <p className="mt-3 text-gray-600 max-w-xs">
            HomeNest is your trusted real estate platform. <br />
            Finding your perfect home, simplified.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-lg text-gray-900">Contact Us</h6>
          <p className="link link-hover text-gray-600">
            Email: info@homenest.com
          </p>
          <p className="link link-hover text-gray-600">
            Phone: +1 (555) 123-4567
          </p>
          <p className="link link-hover text-gray-600">
            Address: 101 Property Way, Realty City, HN 10001
          </p>
        </nav>

        <nav>
          <h6 className="footer-title text-lg text-gray-900">Legal</h6>
          <Link to="/terms" className="link link-hover text-gray-600">
            Terms of use
          </Link>
          <Link to="/privacy" className="link link-hover text-gray-600">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover text-gray-600">
            Cookie policy
          </Link>
        </nav>

        <nav className="items-end">
          <h6 className="footer-title text-lg text-gray-900">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl text-gray-700">
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

      <div className="text-center flex items-center justify-center w-full border-t border-gray-200 pt-6 mt-6 text-gray-600">
        <p className="text-center">
          Copyright © 2025 - All right reserved by HomeNest Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
