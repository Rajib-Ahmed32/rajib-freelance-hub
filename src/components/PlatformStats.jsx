import React, { useState } from "react";
import { FaTasks, FaUsers, FaCheckCircle, FaClock } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import statsData from "../data/statsData";

const iconMap = {
  FaTasks: <FaTasks className="text-2xl text-green-600 dark:text-green-400" />,
  FaUsers: <FaUsers className="text-2xl text-green-600 dark:text-green-400" />,
  FaCheckCircle: (
    <FaCheckCircle className="text-2xl text-green-600 dark:text-green-400" />
  ),
  FaClock: <FaClock className="text-2xl text-green-600 dark:text-green-400" />,
};

const PlatformStats = () => {
  const [visible, setVisible] = useState(false);
  const [countKey, setCountKey] = useState(0);

  const handleVisibilityChange = (inView) => {
    if (inView) {
      setVisible(true);
      setCountKey((prev) => prev + 1);
    } else {
      setVisible(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#d2f2eb] to-[#a3e9d9] dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 px-6 py-14">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-2">
          Our Growth at a Glance
        </h2>
      </div>

      <Fade
        cascade
        damping={0.1}
        direction="up"
        triggerOnce={false}
        onVisibilityChange={handleVisibilityChange}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {statsData.map(({ icon, number, suffix, label }, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
              <div>{iconMap[icon]}</div>
              <p className="text-4xl font-extrabold text-green-700 dark:text-green-400">
                {visible && (
                  <CountUp
                    key={countKey + "-" + idx}
                    end={number}
                    duration={2.5}
                    decimals={number % 1 !== 0 ? 1 : 0}
                    separator=","
                  />
                )}
                {suffix}
              </p>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default PlatformStats;
