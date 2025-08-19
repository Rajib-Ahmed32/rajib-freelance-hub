import FeaturedTasks from "../components/FeaturedTasks";
import BannerSlider from "../components/BannerSlider";
import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import PlatformStats from "../components/PlatformStats";
import AboutUsSection from "../components/AboutUSection";
import RecentTasks from "../components/RecentTasks";
import Newsletter from "../components/Newsletter";
import SalesCTA from "../components/SalesCTA";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedTasks />
      <WhyChooseUs />
      <RecentTasks />
      <SalesCTA />
      <PlatformStats />
      <AboutUsSection />
      <Newsletter />
    </div>
  );
};

export default Home;
