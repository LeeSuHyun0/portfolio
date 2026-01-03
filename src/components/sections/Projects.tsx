"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { getTechIconUrl } from "@/utils/techIcons";

interface ProjectDetail {
  title: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  techStack?: {
    Frontend?: string[];
    Backend?: string[];
    AI?: string[];
  };
  team?: string;
  period?: string;
  githubUrl: string;
  details?: ProjectDetail[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group h-full flex flex-col p-5 bg-card-bg/80 backdrop-blur-sm border border-card-border rounded-xl cursor-pointer"
      whileHover={{
        y: -4,
        boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.3)",
        borderColor: "rgba(139, 92, 246, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0">
          →
        </span>
      </div>
      {project.subtitle && (
        <p className="text-xs text-accent mb-2">{project.subtitle}</p>
      )}
      <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-2 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 mt-auto">
        {project.technologies.map((tech) => {
          const iconUrl = getTechIconUrl(tech);
          return iconUrl ? (
            <div
              key={tech}
              className="w-6 h-6 relative"
              title={tech}
            >
              <Image
                src={iconUrl}
                alt={tech}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div
              key={tech}
              className="flex items-center px-2.5 py-1 bg-accent/10 rounded-full"
              title={tech}
            >
              <span className="text-xs text-accent">{tech}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* 헤더 */}
          <div className="relative p-8 border-b border-gray-100">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
            {project.subtitle && (
              <p className="text-gray-600 text-lg">{project.subtitle}</p>
            )}
            {/* 메타 정보 */}
            <div className="flex flex-wrap gap-6 mt-4 text-sm">
              {project.team && (
                <div>
                  <span className="text-gray-400">참여인원</span>
                  <span className="ml-2 font-medium text-gray-900">{project.team}</span>
                </div>
              )}
              {project.period && (
                <div>
                  <span className="text-gray-400">기간</span>
                  <span className="ml-2 font-medium text-gray-900">{project.period}</span>
                </div>
              )}
            </div>
          </div>

          {/* 본문 */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* 프로젝트 설명 카드 */}
            <motion.div
              className="p-4 bg-indigo-50 rounded-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">프로젝트 설명</h4>
              <p className="text-gray-900 leading-relaxed">{project.description}</p>
            </motion.div>

            {/* 기술 스택 카드 */}
            {project.techStack && (
              <motion.div
                className="p-4 bg-blue-50 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">기술 스택</h4>
                <div className="space-y-4">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                      <span className="text-sm font-bold text-gray-700 sm:min-w-[70px] py-1 sm:py-1.5">{category}</span>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => {
                          const iconUrl = getTechIconUrl(tech);
                          return (
                            <motion.div
                              key={tech}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-violet-100 rounded-full shadow-sm hover:shadow-md hover:border-violet-200 transition-all"
                              whileHover={{ scale: 1.05 }}
                            >
                              {iconUrl && (
                                <div className="w-4 h-4 relative">
                                  <Image
                                    src={iconUrl}
                                    alt={tech}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <span className="text-xs font-medium text-gray-900">{tech}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 기존 기술 스택 (techStack 없을 때) */}
            {!project.techStack && (
              <motion.div
                className="p-4 bg-blue-50 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const iconUrl = getTechIconUrl(tech);
                    return (
                      <motion.div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-violet-100 rounded-full shadow-sm hover:shadow-md transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {iconUrl && (
                          <div className="w-5 h-5 relative">
                            <Image
                              src={iconUrl}
                              alt={tech}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-900">{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 주요 역할 */}
            {project.details && project.details.length > 0 && (
              <motion.div
                className="p-4 bg-violet-50 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">주요 역할</h4>
                <div className="space-y-5">
                  {project.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + idx * 0.1 }}
                    >
                      <h5 className="font-semibold text-gray-900 mb-2">{detail.title}</h5>
                      <ul className="space-y-1.5 ml-1">
                        {detail.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-900 flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* GitHub 링크 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-sm text-foreground font-bold tracking-widest uppercase mb-4">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          프로젝트
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}