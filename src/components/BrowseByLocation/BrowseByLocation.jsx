import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const BrowseByLocation = () => {
  const locations = [
    {
      id: 1,
      city: 'New York',
      count: 45,
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      city: 'Los Angeles',
      count: 32,
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      city: 'Chicago',
      count: 28,
      image:
        'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      city: 'Miami',
      count: 19,
      image:
        'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section className="bg-base-200 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Explore Areas
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Most Popular Neighborhoods
            </h2>
            <p className="text-secondary/70 mt-4 text-lg">
              Explore the most sought-after locations. From bustling city
              centers to peaceful suburbs, find the perfect neighborhood for
              your lifestyle.
            </p>
          </div>

          <Link
            to="/properties"
            className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
          >
            View All <FaArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map(item => (
            <Link
              key={item.id}
              to={`/properties?location=${item.city}`}
              className="group relative overflow-hidden rounded-2xl h-[350px] cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.city}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                    Location
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.city}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="badge badge-primary text-white border-none px-3 py-3">
                    {item.count} Properties
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByLocation;
