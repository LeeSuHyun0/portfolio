const deviconMap: Record<string, string> = {
  // Frontend
  react: "react/react-original",
  React: "react/react-original",
  nextjs: "nextjs/nextjs-original",
  "Next.js": "nextjs/nextjs-original",
  typescript: "typescript/typescript-original",
  TypeScript: "typescript/typescript-original",
  javascript: "javascript/javascript-original",
  JavaScript: "javascript/javascript-original",
  html5: "html5/html5-original",
  tailwindcss: "tailwindcss/tailwindcss-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  Vite: "vitejs/vitejs-original",
  Axios: "axios/axios-plain",
  "React Router": "reactrouter/reactrouter-original",

  // Backend
  java: "java/java-original",
  Java: "java/java-original",
  spring: "spring/spring-original",
  springboot: "spring/spring-original",
  SpringBoot: "spring/spring-original",
  "Spring Boot": "spring/spring-original",
  nodejs: "nodejs/nodejs-original",
  "Node.js": "nodejs/nodejs-original",
  python: "python/python-original",
  Python: "python/python-original",

  // Database
  mysql: "mysql/mysql-original",
  MySQL: "mysql/mysql-original",
  postgresql: "postgresql/postgresql-original",
  PostgreSQL: "postgresql/postgresql-original",

  // Tools
  git: "git/git-original",
  github: "github/github-original",
  docker: "docker/docker-original",
};

const simpleIconsMap: Record<string, string> = {
  supabase: "supabase",
  vercel: "vercel",
};

const noIconTechs = ["rag", "openai", "pinecone", "RAG", "OpenAI API"];

export function getTechIconUrl(tech: string): string {
  if (deviconMap[tech]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconMap[tech]}.svg`;
  }
  if (simpleIconsMap[tech.toLowerCase()]) {
    return `https://cdn.simpleicons.org/${simpleIconsMap[tech.toLowerCase()]}`;
  }
  if (noIconTechs.includes(tech)) {
    return "";
  }
  return "";
}