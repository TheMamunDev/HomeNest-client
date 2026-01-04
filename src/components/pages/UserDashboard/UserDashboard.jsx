import SpinnerMain from '@/components/common/SpinnerMain';
import { AuthContext } from '@/contexts/AuthContext';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useTitle from '@/Hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaHome, FaDollarSign, FaStar, FaCalendarAlt } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import UserDashboardSkeleton from './UserDashboardSkeleton';
import { Link, useNavigate } from 'react-router';

const UserDashboard = () => {
  useTitle('Dashboard');
  const { user, loading } = useContext(AuthContext);
  const secureApi = useAxiosSecure();
  const navigate = useNavigate();

  const { data: myProperties = [], isLoading } = useQuery({
    queryKey: ['my-listing', user?.email],
    queryFn: async () => {
      try {
        const result = await secureApi.get(`/my-listing?email=${user.email}`);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { data: userRatings, isLoading: isLoading2 } = useQuery({
    queryKey: ['user-ratings', user.email],
    queryFn: async () => {
      try {
        const result = await secureApi.get(`/my-ratings?email=${user.email}`);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const totalProperties = myProperties.length;
  const totalPrice = myProperties.reduce((sum, item) => sum + item.price, 0);
  const averagePrice =
    totalProperties > 0 ? (totalPrice / totalProperties).toFixed(0) : 0;

  const totalReviews = userRatings?.length;
  if (loading || isLoading || isLoading2) {
    return <UserDashboardSkeleton></UserDashboardSkeleton>;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-secondary">My Dashboard</h1>
          <p className="text-gray-500">
            Overview of your listed properties and activities.
          </p>
        </div>
        <div className="text-sm breadcrumbs hidden md:block">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow bg-white border border-gray-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaHome className="text-3xl bg-primary/10 p-2 rounded-lg" />
            </div>
            <div className="stat-title">My Properties</div>
            <div className="stat-value text-secondary">{totalProperties}</div>
            <div className="stat-desc">Total active listings</div>
          </div>
        </div>

        <div className="stats shadow bg-white border border-gray-100">
          <div className="stat">
            <div className="stat-figure text-success">
              <FaDollarSign className="text-3xl bg-green-100 p-2 rounded-lg" />
            </div>
            <div className="stat-title">Avg. Listing Price</div>
            <div className="stat-value text-secondary">${averagePrice}</div>
            <div className="stat-desc">Based on listed items</div>
          </div>
        </div>
        <div className="stats shadow bg-white border border-gray-100">
          <div className="stat">
            <div className="stat-figure text-warning">
              <FaStar className="text-3xl bg-yellow-100 p-2 rounded-lg" />
            </div>
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value text-secondary">{totalReviews}</div>
            <div className="stat-desc">Feedback received</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
            <FaDollarSign className="text-primary" /> Property Price Range
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={myProperties}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis dataKey="propertyName" tick={false} axisLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
                <Bar
                  dataKey="price"
                  fill="#059669"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                  name="Price ($)"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-gray-400 mt-2">
              Hover over bars to see property names
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-primary" /> Listing Activity
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={myProperties}>
                <defs>
                  <linearGradient id="colorDate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1f2937" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#1f2937" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="createdAt"
                  tickFormatter={tick =>
                    new Date(tick).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                    })
                  }
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip
                  labelFormatter={label => new Date(label).toLocaleDateString()}
                  contentStyle={{ borderRadius: '8px' }}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#1f2937"
                  fillOpacity={1}
                  fill="url(#colorDate)"
                  name="Listing Value"
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-gray-400 mt-2">
              Timeline of property values added
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-secondary">
          Latest Added Property
        </div>
        {myProperties.length > 0 &&
          myProperties.slice(0, 5).map(property => {
            return (
              <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-32 h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={property.imageLink}
                    alt="Property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <h4 className="font-bold text-lg text-secondary">
                    {property.propertyName.substring(0, 40)}...
                  </h4>
                  <div className="flex justify-center md:justify-start gap-2">
                    <span className="badge badge-primary text-white">
                      {property.category}
                    </span>
                    <span className="badge badge-ghost">${property.price}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Added: {new Date(property.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/propertie-details/${property._id}`)}
                  className="btn btn-sm btn-outline text-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserDashboard;
