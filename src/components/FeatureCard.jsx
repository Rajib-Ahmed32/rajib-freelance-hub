function FeatureCard({ stat, desc }) {
  return (
    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
        {stat}
      </h4>
      <p className="text-gray-500 text-base font-normal leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default FeatureCard;
