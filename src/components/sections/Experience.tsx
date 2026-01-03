"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, education } from "@/data/portfolio";

export default function Experience() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleOpen = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-sm text-foreground font-bold tracking-widest uppercase mb-4">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          학력 & 경력
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 학력 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">학력</h3>
            <div className="space-y-4">
              {education.map((edu) => {
                const isOpen = openIds.includes(edu.id);
                return (
                  <motion.div
                    key={edu.id}
                    className="p-4 bg-card-bg/80 backdrop-blur-sm border border-card-border rounded-lg"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.3)",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h4 className="font-medium">{edu.degree}</h4>
                      <span className="text-xs text-accent">{edu.period}</span>
                    </div>
                    {edu.school && <p className="text-sm text-secondary mb-2">{edu.school}</p>}
                    {edu.description && (
                      <>
                        <button
                          onClick={() => toggleOpen(edu.id)}
                          className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                          {isOpen ? "상세 내용 가리기" : "상세 내용 보기"}
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-sm text-secondary/80 space-y-1 mt-2 overflow-hidden"
                            >
                              {edu.description.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.startsWith("  ") ? item : `· ${item}`}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 경력 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">경력</h3>
            <div className="space-y-4">
              {experiences.map((exp) => {
                const isOpen = openIds.includes(exp.id + 1000);
                return (
                  <motion.div
                    key={exp.id}
                    className="p-4 bg-card-bg/80 backdrop-blur-sm border border-card-border rounded-lg"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.3)",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h4 className="font-medium">{exp.position}</h4>
                      <span className="text-xs text-accent">{exp.period}</span>
                    </div>
                    <p className="text-sm text-secondary mb-2">{exp.company}</p>
                    <button
                      onClick={() => toggleOpen(exp.id + 1000)}
                      className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                      {isOpen ? "상세 내용 가리기" : "상세 내용 보기"}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-sm text-secondary/80 space-y-1 mt-2 overflow-hidden"
                        >
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              · {item}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}