import React from 'react';
import HeroSlider from './headers/HeroSlider';
import WhyChooseUs from './WhyChooseUs';
import MarketInsights from './MarketInsights';
import OwnerCTA from './OwnerCTA';
import FeaturedListing from '../listingPages/FeaturedListing';
import useTitle from '@/Hooks/useTitle';
<<<<<<< HEAD
import FaqSection from './FaqSection';
import Testimonials from '../Testimonials/Testimonials';
import BrowseByLocation from '@/components/BrowseByLocation/BrowseByLocation';
import HowItWorks from '@/components/HowItsWork/HowItsWork';
=======
>>>>>>> 955378fc3f37df8fc63ad238e441a9b4bd82a9a2

const Home = () => {
  useTitle('Home');
  return (
    <div className="min-h-screen max-w-11/12 mx-auto">
      <HeroSlider></HeroSlider>
<<<<<<< HEAD
      <BrowseByLocation></BrowseByLocation>
      <FeaturedListing></FeaturedListing>
      <WhyChooseUs></WhyChooseUs>
      <MarketInsights></MarketInsights>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <FaqSection></FaqSection>
=======
      <FeaturedListing></FeaturedListing>
      <WhyChooseUs></WhyChooseUs>
      <MarketInsights></MarketInsights>
>>>>>>> 955378fc3f37df8fc63ad238e441a9b4bd82a9a2
      <OwnerCTA></OwnerCTA>
    </div>
  );
};

export default Home;
