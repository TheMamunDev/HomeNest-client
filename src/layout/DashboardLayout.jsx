import React, { useContext } from 'react';
import { Outlet, Link, NavLink } from 'react-router';
import {
  FaUser,
  FaHome,
  FaPlusCircle,
  FaListUl,
  FaStar,
  FaBars,
  FaSignOutAlt,
} from 'react-icons/fa';
import { AuthContext } from '@/contexts/AuthContext';

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = [
    { path: '/dashboard', title: 'Overview', icon: <FaHome /> },
    { path: '/dashboard/profile', title: 'My Profile', icon: <FaUser /> },
    {
      path: '/dashboard/add-property',
      title: 'Add Property',
      icon: <FaPlusCircle />,
    },
    {
      path: '/dashboard/my-properties',
      title: 'My Properties',
      icon: <FaListUl />,
    },
    { path: '/dashboard/my-reviews', title: 'My Reviews', icon: <FaStar /> },
  ];

  return (
    <div className="drawer lg:drawer-open font-sans bg-base-200 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-secondary lg:hidden"
            >
              <FaBars className="text-xl" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg font-bold text-secondary">
            HomeNest Dashboard
          </div>
        </div>

        <div className="p-4 md:p-8 lg:p-10">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side z-40">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu p-4 w-72 min-h-full bg-secondary text-white flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8 px-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <FaHome className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">HomeNest</span>
            </Link>

            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/30'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="divider divider-neutral opacity-20 my-4"></div>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  <FaHome className="text-lg" />
                  <span>Back to Home</span>
                </Link>
              </li>

              <li>
                <button
                  onClick={() => logOut()}
                  className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-error hover:bg-error/10 hover:text-error transition-all"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=3" alt="User" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <h4 className="text-sm font-bold text-white truncate">
                  John Doe
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  john@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
