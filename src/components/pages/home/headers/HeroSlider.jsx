import React from 'react';
import { Link } from 'react-router';

const HeroSlider = () => {
  const slides = [
    {
      id: 'slide1',
      img: 'https://i.ibb.co.com/WvZqJnRp/web-sml-4ee24fa4ad9acc5ce8d5.jpg',
      alt: 'Luxury apartments for rent in the city.',
      headline: 'Find Your',
      highlight: 'Luxury Apartment',
      cta: 'Browse Rentals',
      link: '/properties?category=Rent',
      bgPos: 'center top',
    },
    {
      id: 'slide2',
      img: 'https://i.ibb.co.com/G4bnpY3w/american-banking-buy-210617.jpg',
      alt: 'Modern detached house with garden.',
      headline: 'Discover Your Next',
      highlight: 'Family Home',
      cta: 'View Homes for Sale',
      link: '/properties?category=Sale',
      bgPos: 'center center',
    },
    {
      id: 'slide3',
      img: 'https://i.ibb.co.com/23wFtn7M/646fba8ff71d2467da2f6579-61ca30466cb6db42c43702b3-Blog-20headers.png',
      alt: 'Commercial buildings and office spaces.',
      headline: 'Invest in',
      highlight: 'Prime Commercial Real Estate',
      cta: 'See Investment Opportunities',
      link: '/properties?category=Commercial',
      bgPos: 'center bottom',
    },
  ];

  const renderNav = (id, prevId, nextId) => (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a
        href={`#${prevId}`}
        className="btn btn-circle btn-primary opacity-50 hover:opacity-100 transition"
      >
        ❮
      </a>
      <a
        href={`#${nextId}`}
        className="btn btn-circle btn-primary opacity-50 hover:opacity-100 transition"
      >
        ❯
      </a>
    </div>
  );

  return (
    <div className="w-full relative overflow-hidden" data-aos="fade-in">
      <div className="carousel w-full h-[380px] md:h-[560px] rounded-xl shadow-xl">
        {slides.map((slide, index) => {
          const prevId = slides[(index - 1 + slides.length) % slides.length].id;
          const nextId = slides[(index + 1) % slides.length].id;
          return (
            <div
              key={slide.id}
              id={slide.id}
              className="carousel-item relative w-full"
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full object-cover "
                style={{ objectPosition: slide.bgPos }}
              />
              <div className="absolute inset-0 bg-success/40 flex items-center justify-center p-4">
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {slide.headline} <br />
                    <span className="text-white-400 bg-success/80 p-1 rounded-lg inline-block">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-xl md:text-3xl font-medium text-white drop-shadow-md mt-4 mb-8">
                    The perfect place to start your search.
                  </p>
                  <Link
                    to={slide.link}
                    className="btn btn-primary btn-lg text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>

              {renderNav(slide.id, prevId, nextId)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;
