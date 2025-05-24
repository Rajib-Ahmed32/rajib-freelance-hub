import FeaturedTasks from "../components/FeaturedTasks";
import BannerSlider from "../components/BannerSlider";
import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import PlatformStats from "../components/PlatformStats";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedTasks />
      <WhyChooseUs />
      <PlatformStats />
    </div>
  );
};

export default Home;
