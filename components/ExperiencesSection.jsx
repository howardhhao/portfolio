import React from "react";

// Returns badge based on award type
const getAwardBadge = (award) => {
  const a = award.toLowerCase();

  if (a.includes("champion"))
    return <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-yellow-400 text-black">Champion</span>;
  if (a.includes("runner up"))
    return <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-400 text-black">Runner Up</span>;
  if (a.includes("finalist"))
    return <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-400 text-black">Finalist</span>;
  if (a.includes("prelims"))
    return <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-400 text-black">Prelims</span>;

  return <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-400 text-black">Dean List Achiever</span>;
};

// Groups experiences by year
const groupByYear = (list) => {
  return list.reduce((acc, item) => {
    const match = item.title.match(/\b(20\d{2})\b/);
    const year = match ? match[1] : "Others";
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});
};

const ExperiencesSection = ({ experienceList }) => {
  const grouped = groupByYear(experienceList);
  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="experiences" className="py-24 px-6 lg:px-12 xl:px-20 bg-transparent text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-center tracking-tight">
          Experiences & Achievements
        </h2>
        <p className="text-center text-gray-400 text-base md:text-lg mb-10">
  A timeline of milestones, contributions and accomplishments throughout my journey
</p>

        {/* Timeline */}
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="relative border-l border-neutral-700 pl-6">
          {sortedYears.map((year) => (
            <div key={year} className="mb-10">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">{year}</h3>

              {grouped[year].map((item, i) => {
                const [event, award] = item.title.split(/[-–]/).map((s) => s.trim());

                return (
                  <div key={i} className="relative mb-6 group">
                    {/* Dot */}
                    <span className="absolute left-[-11px] top-1 w-3.5 h-3.5 bg-neutral-500 rounded-full z-10" />

                    {/* Entry */}
                    <div
  className="ml-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 
             backdrop-blur-md
             hover:shadow-lg hover:border-white/20 transition-all duration-300"
>
                      <p className="text-sm sm:text-base font-medium flex items-center flex-wrap gap-2">
                        {event}
                        {award && getAwardBadge(award)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
