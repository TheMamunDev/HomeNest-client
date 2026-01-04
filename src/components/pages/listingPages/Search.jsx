import Spinner from '../../common/SpinnerMain';
import { FaDollarSign, FaSearch } from 'react-icons/fa';

const SearchFilter = ({
  setFilters,
  categoriesData,
  priceRange,
  isFetching,
  filters,
  setPageNumber,
}) => {
  const handleFilterChange = e => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setPageNumber(0);
    setFilters(newFilters);
  };
  // console.log(filters);
  return (
    <div className="py-12 px-4 md:px-8 bg-base-200" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={e => e.preventDefault()}
          className="bg-base-100 p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-primary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Property Name
                </span>
              </label>
              <input
                type="text"
                name="propertyName"
                placeholder="Search by Property Name"
                className="input text-neutral input-bordered border-gray-200 w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                value={filters.name}
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
                className="select select-bordered  border-gray-200 text-neutral w-full focus:border-primary focus:ring-primary"
                value={filters.category}
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
                <FaDollarSign className="w-4 h-4 text-secondary" />
              </label>
              <input
                type="number"
                name="minPrice"
                placeholder={`Min (${priceRange?.minPrice || 0})`}
                className="input input-bordered border-gray-200 text-neutral w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                min="0"
                value={filters.minPrice}
              />
            </div>

            <div className="form-control">
              <label className="label flex items-center gap-1">
                <span className="label-text font-medium text-secondary">
                  Max Price
                </span>{' '}
                <FaDollarSign className="w-4 h-4 text-secondary" />
              </label>
              <input
                type="number"
                name="maxPrice"
                placeholder={`Min (${priceRange?.maxPrice || 0})`}
                className="input input-bordered text-neutral border-gray-200 w-full focus:border-primary focus:ring-primary"
                onChange={handleFilterChange}
                value={filters.maxPrice}
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
              <label
                onClick={() => setPageNumber(0)}
                className="btn btn-primary btn-lg w-full md:w-1/3 mx-auto font-semibold transition duration-300 flex items-center gap-2"
              >
                <FaSearch className="w-5 h-5" />
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
