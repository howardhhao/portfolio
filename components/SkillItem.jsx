import React from "react";

const SkillItem = ({ icon, label }) => {
  return (
    <div
      className="group flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-sm transition transform hover:scale-105 hover:shadow-md hover:bg-white/30 dark:hover:bg-white/20"
      role="listitem"
      aria-label={`Skill: ${label}`}
    >
      <span className="text-xl transition-transform duration-300 ease-in-out group-hover:rotate-[12deg] group-hover:scale-110">
        {icon}
      </span>
      <span className="text-gray-700 dark:text-gray-200" title={label}>
        {label}
      </span>
    </div>
  );
};

export default SkillItem;
