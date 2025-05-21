const Logo = () => (
  <div className="flex items-center gap-2">
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-indigo-600"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="5"
        fill="white"
      />
      <path
        d="M30 65L45 40L55 58L70 35"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-lg font-semibold text-indigo-600 tracking-tight">
      Freelance<span className="text-slate-800">Hub</span>
    </span>
  </div>
);

export default Logo;
