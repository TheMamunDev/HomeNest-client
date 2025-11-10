import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaSliders } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SearchFilter from './Search';
import { useQuery } from '@tanstack/react-query';
import {
  getCategories,
  getFilteredListings,
  getPriceRange,
} from '../../../Api/api';

// --- MOCK ICONS (Simulating react-icons for environment stability) ---
const IconLocation = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
    />
  </svg>
);
const IconDollar = props => (
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
const IconArrowRight = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15l-3.55-3.55L14 6l6 6l-6 6z"
    />
  </svg>
);

const ListingCard = ({ listing }) => {
  const formattedPrice =
    listing.category === 'Rental'
      ? `$${listing.price.toLocaleString()}/mo`
      : `$${listing.price.toLocaleString()}`;

  return (
    // Rule 8: Equal Card Height (h-full is used within the grid item)
    <div
      className="card w-full h-full bg-base-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
      data-aos="fade-up"
    >
      {/* Rule 3: Uniform Image Size/Aspect Ratio */}
      <figure className="aspect-video w-full">
        <img
          src={listing.img}
          alt={listing.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="card-title text-xl text-secondary">
              {listing.name}
            </h2>
            <div className="badge badge-accent text-xs font-semibold uppercase">
              {listing.category}
            </div>
          </div>

          {/* Price and Location */}
          <div className="text-lg font-bold text-primary mb-2 flex items-center gap-1">
            <IconDollar className="w-5 h-5 text-primary" /> {formattedPrice}
          </div>

          <p className="flex items-center text-gray-600 mb-3 text-sm">
            <IconLocation className="w-4 h-4 mr-1" /> {listing.location}
          </p>

          {/* Posted By */}
          <p className="text-sm text-gray-700 mt-2">
            Posted by:{' '}
            <span className="font-semibold text-secondary">
              {listing.ownerName}
            </span>
          </p>
        </div>

        {/* See Details Button (Rule 4: Consistent Button Style) */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/properties/${listing.id}`}
            className="btn btn-sm btn-primary transition duration-300"
          >
            See Details <IconArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: '',
    maxPrice: '',
    location: '',
  });

  const { data: categoriesData = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: priceRange } = useQuery({
    queryKey: ['price-range'],
    queryFn: getPriceRange,
  });

  const {
    data: listings = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['listings', filters],
    queryFn: () => getFilteredListings(filters),
  });

  const mainHeadingStyle =
    'text-4xl md:text-5xl font-extrabold text-secondary text-center mb-4';
  const highlightStyle = 'text-primary';

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-base-200">
      <div className="mt-6">
        <h2 className={mainHeadingStyle}>
          All Available <span className={highlightStyle}>Properties</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Browse the complete list of rentals, sales, and commercial listings.
        </p>
        <SearchFilter
          onFilterChange={setFilters}
          categoriesData={categoriesData}
          priceRange={priceRange}
          isFetching={isFetching}
        ></SearchFilter>
      </div>

      <aside className="lg:col-span-3  mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="join">
            <button className="join-item btn btn-primary btn-outline">«</button>
            <button className="join-item btn btn-primary">Page 1</button>
            <button className="join-item btn btn-primary btn-outline">»</button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Properties;
