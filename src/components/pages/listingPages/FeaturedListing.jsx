import React from 'react';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedListing } from '../../../Api/api';
import ListingCard from './ListingCard';
import Heading from '../../common/Heading';
import MyListingSkeleton from '@/components/common/MyListingSkeleton';
const FeaturedListing = () => {
  const {
    data: ListingItems = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['post'],
    queryFn: fetchFeaturedListing,
  });

  return (
    <section className="py-16 bg-base-200/50" data-aos="fade-up">
      <div className=" mx-auto md:px-0 px-4">
        <Heading
          title={'Explore Our'}
          highlight={'Featured Homes'}
          subtitle={
            'Hand-picked properties, updated hourly based on newest arrivals.'
          }
        ></Heading>

        {isLoading || isFetching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-xl shadow p-4"
              >
                <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
                <div className="flex justify-between items-center gap-8">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/6 mb-2"></div>
                </div>

                <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/4 mb-2"></div>

                <div className="h-4 bg-gray-300 rounded w-full mb-6"></div>
                <div className="flex justify-between gap-2">
                  <div className="h-4 w-1/4"></div>
                  <div className="h-6  rounded w-1/4"></div>
                  <div className="h-6  rounded w-1/4"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {ListingItems?.map(listing => (
              <ListingCard key={listing._id} listing={listing}></ListingCard>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="btn btn-primary  btn-lg font-semibold hover:bg-success hover:text-white transition duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
