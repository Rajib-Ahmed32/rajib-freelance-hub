import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h6 className="text-emerald-600 dark:text-emerald-400 text-lg font-semibold uppercase tracking-wide font-manrope">
            About Us
          </h6>
          <h2 className="text-5xl font-extrabold font-manrope text-gray-900 dark:text-white leading-tight">
            Empowering Freelancers & Businesses to Collaborate
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl">
            Our platform bridges the gap between freelancers and clients,
            creating opportunities to grow, collaborate, and deliver projects
            with confidence. From posting tasks to secure payments, we provide a
            seamless experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-xl">
            <FeatureCard
              stat="1000+ Tasks"
              desc="A diverse range of jobs posted daily across multiple industries."
            />
            <FeatureCard
              stat="Trusted Freelancers"
              desc="Verified professionals with strong portfolios and reviews."
            />
            <FeatureCard
              stat="Secure Payments"
              desc="Safe and transparent payment system for all projects."
            />
            <FeatureCard
              stat="24/7 Support"
              desc="Dedicated team available anytime to assist you."
            />
          </div>

          <button className="w-48 py-3 rounded-md bg-emerald-600 text-white font-semibold font-manrope hover:bg-emerald-700 transition-all duration-300 shadow">
            Learn More
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-emerald-200 dark:border-emerald-600">
            <img
              src="/images/freelancer.png"
              alt="Freelance Task Marketplace"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
