import FeaturedTasks from "../components/FeaturedTasks";
import BannerSlider from "../components/BannerSlider";
import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedTasks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
