import React from 'react';

const UserDashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse font-sans">
      <div className="flex justify-between items-end">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded-md"></div>
        </div>
        <div className="hidden md:block">
          <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2"></div>
            </div>
            <div className="text-right space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded ml-auto"></div>

              <div className="h-8 w-16 bg-gray-200 rounded ml-auto"></div>

              <div className="h-3 w-32 bg-gray-200 rounded ml-auto"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-[400px]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
          </div>

          <div className="flex items-end justify-between h-72 gap-2 mt-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-full bg-gray-200 rounded-t-md"
                style={{ height: `${Math.random() * 60 + 20}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-[400px]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
          </div>

          <div className="h-72 w-full bg-gray-100 rounded-xl overflow-hidden relative">
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gray-200 rounded-t-full opacity-50"></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <div className="h-5 w-40 bg-gray-200 rounded"></div>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-32 h-24 bg-gray-200 rounded-lg"></div>

          <div className="flex-1 space-y-3 w-full">
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-3 w-32 bg-gray-200 rounded"></div>
          </div>

          <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSkeleton;
