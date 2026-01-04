import React from 'react';

const MyReviewSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden p-4 max-w-4xl mx-auto my-8 border border-gray-100">
      <div className="animate-pulse md:flex">
        <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <div className="w-full bg-gray-200 rounded-lg h-48 lg:h-52 lg:w-48 flex-shrink-0"></div>
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="h-6 bg-gray-200 rounded w-2/5"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-2 pt-2">
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            <hr className="border-gray-100 mt-4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          <div className="flex justify-end space-x-3 mt-8">
            <div className="h-10 bg-gray-200 rounded-md w-24"></div>
            <div className="h-10 bg-gray-200 rounded-md w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewSkeleton;
