import React from 'react';
import { FaHome, FaUsers, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MarketInsights from '../home/MarketInsights';
import WhyChooseUs from '../home/WhyChooseUs';
import OwnerCTA from '../home/OwnerCTA';

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen font-sans max-w-11/12 mx-auto">
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Welcome to <span className="text-primary">HomeNest</span>
            </h1>
            <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
              Your modern real estate companion. We bridge the gap between
              property owners and seekers, making the journey of finding a home
              seamless, secure, and transparent.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/properties"
                className="btn btn-primary text-white btn-wide rounded-box shadow-lg hover:shadow-xl transition-all"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MarketInsights></MarketInsights>

      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="badge badge-primary badge-outline p-4 font-semibold">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-secondary">
              Redefining the <br />
              <span className="text-primary">Real Estate Experience</span>
            </h2>
            <p className="text-secondary/70 text-lg leading-relaxed">
              At HomeNest, we believe that finding a home shouldn't be
              stressful. We've built a platform that empowers owners to manage
              listings with ease while giving tenants the advanced tools they
              need to find their perfect match.
            </p>
            <p className="text-secondary/70 text-lg leading-relaxed">
              Whether you are looking for a cozy apartment or selling a luxury
              villa, HomeNest provides the technology and trust you need to move
              forward.
            </p>

            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-3 text-secondary font-medium">
                <FaHome className="text-primary" /> Comprehensive Property
                Listings
              </li>
              <li className="flex items-center gap-3 text-secondary font-medium">
                <FaShieldAlt className="text-primary" /> Verified Owners &
                Secure Data
              </li>
              <li className="flex items-center gap-3 text-secondary font-medium">
                <FaHandshake className="text-primary" /> Direct Communication
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-2xl border border-base-300">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Building"
                className="rounded-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-primary font-bold text-xl">Trusted By</p>
                <p className="text-white">Thousands of families</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 border-t border-base-300/20">
        <WhyChooseUs></WhyChooseUs>
      </div>

      <div className="py-16">
        <OwnerCTA></OwnerCTA>
      </div>
    </div>
  );
};

export default About;
