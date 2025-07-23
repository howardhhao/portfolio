const ExperienceCard = ({ title }) => {
  const [competition, award] = title.split("–").map((str) => str.trim());

  return (
    <div
      className="min-w-[350px] max-w-[350px] flex-shrink-0 
  bg-white/80 dark:bg-white/5 
  backdrop-blur-md dark:backdrop-blur-lg 
  border border-gray-200 dark:border-white/10 
  rounded-2xl p-6 
  shadow-md dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] 
  hover:shadow-xl hover:scale-[1.03] 
  transition-all duration-300 ease-in-out"

    >
      {/* Glow ring on hover (dark mode) */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500 transition duration-300 pointer-events-none" />

      {/* Competition Name */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2">
        {competition}
      </h3>

      {/* Award Badge */}
      <div
        className="inline-block mt-3 px-4 py-2 text-sm font-medium 
                   bg-blue-100 text-blue-800 
                   dark:bg-white/10 dark:text-blue-200 
                   dark:backdrop-blur-sm 
                   rounded-full shadow-sm"
      >
        {award}
      </div>
    </div>
  );
};

export default ExperienceCard;
