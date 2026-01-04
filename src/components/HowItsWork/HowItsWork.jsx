import React from 'react';
import {
  FaSearchLocation,
  FaRegHandshake,
  FaKey,
  FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearchLocation className="text-4xl text-primary" />,
      title: 'Search for Real Estate',
      description:
        'Browse thousands of properties with our advanced filters. Sort by price, location, or category to find your perfect match.',
    },
    {
      id: 2,
      icon: <FaRegHandshake className="text-4xl text-primary" />,
      title: 'Connect with Owners',
      description:
        'Found something you like? View verified owner details and contact them directly to schedule a viewing or ask questions.',
    },
    {
      id: 3,
      icon: <FaKey className="text-4xl text-primary" />,
      title: 'Close the Deal',
      description:
        'Finalize the rental agreement or sale securely. Get the keys and move into your new home with total peace of mind.',
    },
  ];

  return (
    <section className="bg-base-200 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
            Simple Process
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            How HomeNest Works
          </h2>
          <p className="text-secondary/70 text-lg">
            From searching to settling in, we make the journey seamless. Here is
            how you can get started in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-base-200 -z-0"></div>

          {steps.map(step => (
            <div key={step.id} className="relative z-10 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-base-200 border-4 border-base-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>

                  <div className="absolute top-0 right-1/3 translate-x-8 bg-base-200 text-neutral w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-primary">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary/60 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/properties"
            className="btn btn-primary btn-lg text-white rounded-full px-8 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all"
          >
            Start Your Search <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
