import React from "react";

const ExperienceCard = ({ title }) => {
  // Split into main title and award
  const [competition, rawAward] = title.split(/[-–]/).map((str) => str.trim());
  const award = rawAward || null;

  // Define minimalistic badge colors
  const getBadgeClass = (award) => {
    if (!award) return "";
    const a = award.toLowerCase();
    if (a.includes("champion")) return "bg-yellow-300 text-black";
    if (a.includes("runner up")) return "bg-gray-300 text-black";
    if (a.includes("finalist")) return "bg-blue-300 text-black";
    return "bg-white/20 text-white";
  };

  return (
    <div
      className="w-full sm:max-w-xs flex flex-col items-center justify-center 
                 bg-white/5 text-white border border-white/10 
                 backdrop-blur-md p-6 rounded-2xl shadow-sm 
                 hover:border-white/30 transition-all duration-300 text-center"
    >
      <h3 className="text-lg font-semibold mb-3">{competition}</h3>

      {award && (
        <span
          className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${getBadgeClass(
            award
          )}`}
        >
          {award}
        </span>
      )}
    </div>
  );
};

export default ExperienceCard;
