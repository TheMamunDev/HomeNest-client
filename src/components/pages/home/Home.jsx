import React from 'react';
import HeroSlider from './headers/HeroSlider';
import WhyChooseUs from './WhyChooseUs';
import MarketInsights from './MarketInsights';
import OwnerCTA from './OwnerCTA';
import FeaturedListing from '../listingPages/FeaturedListing';
import useTitle from '@/Hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <div className="min-h-screen max-w-11/12 mx-auto">
      <HeroSlider></HeroSlider>
      <FeaturedListing></FeaturedListing>
      <WhyChooseUs></WhyChooseUs>
      <MarketInsights></MarketInsights>
      <OwnerCTA></OwnerCTA>
    </div>
  );
};

export default Home;
