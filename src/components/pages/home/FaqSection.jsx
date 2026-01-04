import React from 'react';
import { Link } from 'react-router-dom';

const FaqSection = () => {
  const faqs = [
    {
      question: 'Is HomeNest free to use for renters?',
      answer:
        'Yes! Searching for properties, filtering results, and viewing property details is completely free for all users. You only need to create an account if you wish to leave reviews or contact owners directly.',
    },
    {
      question: 'How do I list my property on HomeNest?',
      answer:
        "Property owners can list their homes by creating an account and navigating to the 'Add Property' page. You'll need to provide details like location, price, description, and upload high-quality images.",
    },
    {
      question: 'Are the property listings verified?',
      answer:
        "We strive to ensure authenticity. While owners manage their own listings, our admin team reviews new posts. We also encourage users to check the 'Ratings & Reviews' section on each property to see feedback from verified tenants.",
    },
    {
      question: 'Can I edit or delete my property listing later?',
      answer:
        "Absolutely. As a property owner, you have full control via your 'My Properties' dashboard. You can update price, availability, or remove the listing entirely at any time.",
    },
    {
      question: 'How does the review system work?',
      answer:
        'To maintain trust, only authenticated users can leave reviews. This helps future tenants make informed decisions based on real experiences regarding the property and the landlord.',
    },
  ];

  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex flex-col justify-center">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Common Questions
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-secondary/70 text-lg mb-8">
              Find answers to the most common questions about renting, buying,
              and listing properties on HomeNest.
            </p>

            <div className="bg-base-200 p-6 rounded-xl shadow-lg text-neutral">
              <p className="font-semibold mb-2">Still have questions?</p>
              <p className="text-sm opacity-80 mb-4">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary w-full border-none text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 border border-base-300 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <input
                  type="radio"
                  name="my-accordion-3"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-lg font-semibold text-secondary">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-secondary/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
