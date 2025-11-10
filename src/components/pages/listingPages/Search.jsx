import React, { useState } from 'react';

import { FadeLoader } from 'react-spinners';
import Spinner from '../../common/Spinner';

const IconSearch = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.95 0-5.025-2.075T2.4 9.5q0-2.95 2.075-5.025T9.5 2.4q2.95 0 5.025 2.075T16.6 9.5q0 1.05-.35 2t-.95 1.75l6.3 6.3zM9.5 14q2.075 0 3.538-1.462T14.5 9.5q0-2.075-1.462-3.538T9.5 4.5q-2.075 0-3.538 1.462T4.5 9.5q0 2.075 1.462 3.538T9.5 14"
    />
  </svg>
);

const IconDollarSign = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 18h2V6h-2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1.88-5.75l2.43 2.43l-.71.71l-2.43-2.43zm3.76-7.39l-2.43 2.43l.71.71l2.43-2.43z"
    />
  </svg>
);

const SearchFilter = ({
  onFilterChange,
  categoriesData,
  priceRange,
  isFetching,
}) => {
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: '',
    maxPrice: '',
    location: '',
  });
  const handleFilterChange = e => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="py-12 px-4 md:px-8 bg-base-200" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <form
          // onSubmit={handleSearch}
          className="bg-base-100 p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-primary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Location / Address
                </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter city, area, or zip code"
                className="input input-bordered w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                Value={filters.location}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Property Type
                </span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full focus:border-primary focus:ring-primary"
                Value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                {categoriesData.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label flex items-center gap-1">
                <span className="label-text font-medium text-secondary">
                  Min Price
                </span>{' '}
                <IconDollarSign className="w-4 h-4 text-gray-500" />
              </label>
              <input
                type="number"
                name="minPrice"
                placeholder={`Min (${priceRange?.minPrice || 0})`}
                className="input input-bordered w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                min="0"
                Value={filters.minPrice}
              />
            </div>

            <div className="form-control">
              <label className="label flex items-center gap-1">
                <span className="label-text font-medium text-secondary">
                  Max Price
                </span>{' '}
                <IconDollarSign className="w-4 h-4 text-gray-500" />
              </label>
              <input
                type="number"
                name="maxPrice"
                placeholder={`Min (${priceRange?.maxPrice || 0})`}
                className="input input-bordered w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                Value={filters.maxPrice}
              />
            </div>
          </div>

          <div className="mt-6 ">
            {isFetching ? (
              <label className="btn btn-primary btn-lg w-full md:w-1/3 mx-auto font-semibold transition duration-300 flex items-center gap-2">
                <span className="loading loading-spinner"></span>
                Searching....
              </label>
            ) : (
              <label className="btn btn-primary btn-lg w-full md:w-1/3 mx-auto font-semibold transition duration-300 flex items-center gap-2">
                <IconSearch className="w-5 h-5" />
                Search Listings
              </label>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
