"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">
              My Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">경력 & 학력</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              저의 성장 과정입니다
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 glass-card rounded-xl">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">경력</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-[11px] before:top-10 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent last:before:hidden"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="glass-card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold">{exp.position}</h4>
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-secondary font-medium mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-secondary/80 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 text-xs">
                              ▸
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 glass-card rounded-xl">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">학력</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-[11px] before:top-10 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent last:before:hidden"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>

                    <div className="glass-card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <span className="text-sm text-accent font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-secondary font-medium">
                        {edu.school}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}