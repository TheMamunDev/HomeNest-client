import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import MyLink from './MyLink';
import { CiHome } from 'react-icons/ci';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Badge } from '../ui/badge';
import { Spinner } from '../ui/spinner';

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'homenestDark' : 'light');
    localStorage.setItem('theme', theme);
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

  const navLinks = [
    { label: 'Home', to: '/', icon: <CiHome /> },
    { label: 'All Properties', to: '/properties', icon: <CiHome /> },
    {
      label: 'Add Property',
      to: '/add-property',
      icon: <CiHome />,
      auth: true,
    },
    {
      label: 'My Properties',
      to: '/my-properties',
      icon: <CiHome />,
      auth: true,
    },
    { label: 'My Ratings', to: '/my-ratings', icon: <CiHome />, auth: true },
  ];

  const authUI = loading ? (
    <div className="flex items-center gap-4 ">
      <Badge className="text-neutral">
        <Spinner />
        Syncing
      </Badge>
    </div>
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
        {/* <button
          onClick={handleTheme}
          className="btn btn-ghost btn-circle transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {localStorage.getItem('theme') === 'homenestDark' ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button> */}
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FaBarsStaggered />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-base-100 text-neutral "
              align="start"
            >
              {navLinks
                .filter(item => !item.auth || isLoggedIn)
                .map((item, idx) => (
                  <DropdownMenuItem key={idx}>
                    <MyLink to={item.to} className="flex items-center gap-1">
                      {item.label}
                    </MyLink>
                    <DropdownMenuShortcut>{item.icon}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
              <DropdownMenuItem>
                <button
                  onClick={handleTheme}
                  className="flex items-center gap-1"
                >
                  {theme === 'homenestDark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700" />
                  )}
                  {theme === 'homenestDark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
            {}
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
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-2">
          {' '}
          {navLinks
            .filter(item => !item.auth || isLoggedIn)
            .map((item, idx) => (
              <li key={idx}>
                <MyLink to={item.to} className="flex items-center gap-1">
                  {item.label}
                </MyLink>
              </li>
            ))}
          <li>
            <button
              onClick={handleTheme}
              className="btn btn-ghost btn-circle transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'homenestDark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{authUI}</div>
    </div>
  );
};

export default Navbar;
