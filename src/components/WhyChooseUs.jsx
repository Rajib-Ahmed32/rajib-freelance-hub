import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Card, CardContent } from "../components/ui/card";
import {
  FaLock,
  FaBullseye,
  FaHeadset,
  FaCreditCard,
  FaHandshake,
  FaClipboardList,
} from "react-icons/fa";

import reasons from "../data/reasons.json";

const iconMap = {
  FaLock,
  FaBullseye,
  FaHeadset,
  FaCreditCard,
  FaHandshake,
  FaClipboardList,
};

const Icon = ({ name }) => {
  const IconComponent = iconMap[name];
  return IconComponent ? (
    <IconComponent className="text-3xl text-[#10b981] dark:text-[#34d399]" />
  ) : null;
};

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] dark:from-gray-900 dark:to-gray-800 px-6 py-16">
      <div className="relative mx-auto max-w-5xl text-center mb-10">
        <span className="text-green-600 dark:text-green-300 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why choose us
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold my-3 text-gray-800 dark:text-white">
          A Smarter Way to Get Freelance Tasks Done
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-600 dark:text-gray-300">
          Our freelance marketplace connects clients with skilled professionals
          for any task, big or small. Post tasks, receive competitive bids, and
          manage your projects—all in one seamless platform.
        </p>
      </div>

      <Zoom cascade damping={0.1} triggerOnce>
        <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition duration-300 ease-in-out"
            >
              <CardContent className="p-6 md:p-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <Icon name={item.icon} />
                  <h2 className="text-lg font-semibold text-[#065f46] dark:text-[#bbf7d0] leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default WhyChooseUs;
