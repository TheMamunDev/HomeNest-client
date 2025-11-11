import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import MyLink from './MyLink';

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = checked => {
    setTheme(checked ? 'homenestDark' : 'light');
  };

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Log Out Successfull');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/properties">All Properties</MyLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <MyLink to="/add-property">Add Property</MyLink>
          </li>
          <li>
            <MyLink to="/my-properties">My Properties</MyLink>
          </li>
          <li>
            <MyLink to="/my-ratings">My Ratings</MyLink>
          </li>
        </>
      )}
    </>
  );

  const authUI = loading ? (
    <span> Loading......</span>
  ) : isLoggedIn ? (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar transition-transform duration-300 hover:scale-105"
      >
        <div className="w-10 rounded-full ring ring-primary ring-offset-secondary ring-offset-2">
          <img
            alt={user?.displayName}
            src={user?.photoURL || 'https://i.pravatar.cc/150?img=50'}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-box w-64 border border-gray-100"
      >
        <li className=" py-2 border-b border-gray-100">
          <span className="font-bold text-lg text-secondary">
            {user?.displayName}
          </span>
          <span className="text-xs text-base-300 truncate mt-[-5px]">
            {user?.email}
          </span>
        </li>
        <li>
          <button
            className="btn btn-sm btn-ghost w-full  text-sm justify-start text-red-500 hover:bg-red-50"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex gap-2">
      <Link
        to="/login"
        className="btn btn-outline btn-sm btn-primary hover:bg-primary hover:text-white transition duration-300"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="btn btn-primary btn-sm transition duration-300"
      >
        Signup
      </Link>
    </div>
  );

  return (
    <div
      className="navbar bg-light-realestate shadow-md sticky top-0 z-50 px-4 md:px-8"
      data-aos="fade-down"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-neutral"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:bg-transparent"
        >
          <span className="text-2xl lg:text-3xl font-bold text-gray-800">
            Home<span className="text-primary">Nest</span>
          </span>
        </Link>
        <input
          onChange={e => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem('theme') === 'homenestDark'}
          className="toggle"
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">{authUI}</div>
    </div>
  );
};

export default Navbar;
