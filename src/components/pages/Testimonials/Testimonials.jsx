import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Tenant',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      review:
        'HomeNest made my apartment hunt incredibly easy. The filters are accurate, and I was able to contact the landlord directly. I found my dream studio in just two days!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Owner',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      review:
        "As a landlord, the 'My Properties' dashboard is a lifesaver. It's simple to add listings and update availability. The layout is professional and attracts serious tenants.",
    },
    {
      id: 3,
      name: 'Emily & David',
      role: 'Home Buyers',
      image:
        'https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4,
      review:
        "We loved the user interface. It's clean, fast, and the dark mode option is a nice touch for late-night browsing. Highly recommended for anyone looking for real estate.",
    },
    {
      id: 4,
      name: 'Jessica Lee',
      role: 'Tenant',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      review:
        "The verified owner badge gave me so much peace of mind. I've been scammed on other sites before, but HomeNest feels secure and trustworthy.",
    },
    {
      id: 5,
      name: 'Robert Fox',
      role: 'Agent',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      review:
        'I manage 20+ properties and this platform allows me to handle inquiries faster than anywhere else. The mobile view is excellent for working on the go.',
    },
  ];

  return (
    <section className="bg-base-200 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-1 w-10 bg-primary rounded-full"></span>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Testimonials
            </span>
            <span className="h-1 w-10 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Trusted by Thousands of <br /> Happy Customers
          </h2>
          <p className="text-secondary/70 text-lg">
            Don't just take our word for it. Here is what our community of
            owners and tenants has to say about their HomeNest experience.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary h-full">
                <div className="card-body">
                  <FaQuoteLeft className="text-4xl text-primary mb-4" />
                  <p className="text-secondary/80 mb-6 italic min-h-[80px]">
                    "{review.review}"
                  </p>
                  <div className="flex gap-1 mb-4 text-warning">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="divider my-2"></div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.image} alt={review.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">
                        {review.name}
                      </h4>
                      <p className="text-sm text-secondary/60">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination-bullet-active {
          background-color: #059669 !important; 
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
