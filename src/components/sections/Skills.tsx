"use client";

import Image from "next/image";
import { skills } from "@/data/portfolio";
import { getTechIconUrl } from "@/utils/techIcons";

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; icon: string }>;
  color: string;
}

function SkillCategory({ title, skills, color }: SkillCategoryProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="flex-1 h-px opacity-30" style={{ backgroundColor: color }} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => {
          const iconUrl = getTechIconUrl(skill.icon);
          return (
            <div
              key={skill.name}
              className="glass-card min-h-[120px] p-4 flex flex-col items-center justify-center gap-3 cursor-default group hover:shadow-lg transition-all duration-200"
            >
              {iconUrl && (
                <div className="w-14 h-14 relative">
                  <Image
                    src={iconUrl}
                    alt={skill.name}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              )}
              <span className="text-sm font-medium text-secondary group-hover:text-foreground transition-colors text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-sm text-foreground font-bold tracking-widest uppercase mb-4">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          기술 스택
        </h2>

        <SkillCategory title="Frontend" skills={skills.frontend} color="#818cf8" />
        <SkillCategory title="Backend" skills={skills.backend} color="#60a5fa" />
        <SkillCategory title="Tools" skills={skills.tools} color="#a78bfa" />
        <SkillCategory title="AI" skills={skills.ai} color="#f472b6" />
      </div>
    </section>
  );
}