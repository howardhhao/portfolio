import React from "react";

const SkillItem = ({ icon, label }) => {
  return (
    <div
      className="group flex flex-col items-center justify-center px-4 py-5 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white"
      role="listitem"
      aria-label={`Skill: ${label}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-2xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      <span className="text-white text-sm font-medium mt-3 text-center" title={label}>
        {label}
      </span>
    </div>
  );
};


export default SkillItem;
