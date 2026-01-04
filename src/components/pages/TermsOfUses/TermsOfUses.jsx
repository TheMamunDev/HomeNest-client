import React from 'react';
import {
  FaFileContract,
  FaExclamationCircle,
  FaUserShield,
  FaGavel,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsOfUses = () => {
  const lastUpdated = 'January 3, 2026';

  return (
    <div className="min-h-screen font-sans max-w-11/12 mx-auto">
      <div className="bg-secondary/5 py-16 text-center">
        <div className="mx-auto px-4">
          <div className="flex justify-center mb-4">
            <FaFileContract className="text-5xl text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary b-4">
            Terms of Use
          </h1>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Please read these terms carefully before using the HomeNest
            platform. By using our services, you agree to be bound by these
            conditions.
          </p>
          <p className="mt-6 text-sm text-primary font-semibold tracking-wide uppercase">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-base-200 rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-secondary/70 leading-relaxed mb-4">
              Welcome to <strong>HomeNest</strong>. By accessing or using our
              website, application, or services, you agree to comply with and be
              bound by these Terms of Use. If you do not agree to these terms,
              you may not access or use our services.
            </p>
          </section>

          <div className="divider"></div>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <FaUserShield className="text-primary" /> 2. User Accounts
            </h2>
            <p className="text-secondary/70 leading-relaxed mb-4">
              To access certain features of HomeNest (such as listing properties
              or posting reviews), you must register for an account. You agree
              to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary/70 ml-2">
              <li>
                Provide accurate, current, and complete information during
                registration.
              </li>
              <li>
                Maintain the security of your password and account details.
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
          </section>

          <div className="divider"></div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              3. Property Listings & Content
            </h2>
            <p className="text-secondary/70 leading-relaxed mb-4">
              <strong>For Property Owners:</strong> By posting a listing on
              HomeNest, you warrant that you have the legal authority to lease
              or sell the property. You agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary/70 ml-2 mb-4">
              <li>
                All images and descriptions are accurate and not misleading.
              </li>
              <li>
                The listing complies with all local fair housing and zoning
                laws.
              </li>
              <li>
                You will not post duplicate listings for the same property.
              </li>
            </ul>
            <div className="alert bg-primary/10 border-primary text-secondary text-sm">
              <FaExclamationCircle className="text-primary text-xl" />
              <span>
                HomeNest reserves the right to remove any listing that violates
                our policies or is reported as fraudulent without prior notice.
              </span>
            </div>
          </section>

          <div className="divider"></div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              4. Prohibited Conduct
            </h2>
            <p className="text-secondary/70 leading-relaxed mb-4">
              While using HomeNest, you agree not to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-base-200 p-4 rounded-lg border-l-4 border-error">
                <h4 className="font-bold text-primary">Spam & Abuse</h4>
                <p className="text-sm text-neutral">
                  Do not harass other users or send unsolicited commercial
                  messages.
                </p>
              </div>
              <div className="bg-base-200 p-4 rounded-lg border-l-4 border-error">
                <h4 className="font-bold text-primary">Fake Reviews</h4>
                <p className="text-sm text-neutral">
                  Do not post ratings for properties you have not visited or
                  interacted with.
                </p>
              </div>
              <div className="bg-base-200 p-4 rounded-lg border-l-4 border-error">
                <h4 className="font-bold text-primary">Data Scraping</h4>
                <p className="text-sm text-neutral">
                  Do not use automated bots to harvest property or user data.
                </p>
              </div>
              <div className="bg-base-200 p-4 rounded-lg border-l-4 border-error">
                <h4 className="font-bold text-primary">Discrimination</h4>
                <p className="text-sm text-neutral">
                  Discriminatory language or behavior based on race, religion,
                  or gender is strictly prohibited.
                </p>
              </div>
            </div>
          </section>

          <div className="divider"></div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <FaGavel className="text-primary" /> 5. Limitation of Liability
            </h2>
            <p className="text-secondary/70 leading-relaxed">
              HomeNest serves as a platform to connect owners and seekers. We do
              not own, manage, or inspect the properties listed. We are not a
              party to any rental agreement or transaction between users.
              HomeNest is not liable for any damages, losses, or disputes
              arising from your use of the platform.
            </p>
          </section>

          <div className="mt-12 p-6 bg-secondary/5 rounded-lg text-center">
            <h3 className="text-lg font-bold text-secondary mb-2">
              Have questions about these terms?
            </h3>
            <p className="text-secondary/70 mb-4">
              If you have any concerns regarding our policies, please contact
              our support team.
            </p>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Contact Legal Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUses;
