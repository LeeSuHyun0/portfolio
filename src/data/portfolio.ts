export const personalInfo = {
  name: "Lee Su Hyun",
  title: "신입 프론트엔드 개발자",
  email: "esuhyun0416@gmail.com",
  github: "https://github.com/LeeSuHyun0",
  description: "사용자의 시선이 머무는 디테일에 집중합니다.\nAI 챗봇부터 관리자 대시보드까지 70여 개의 화면을 직접 구축하며,\n최적의 사용자 경험을 설계하는 신입 프론트엔드 개발자 이수현입니다.",
};

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML/CSS", icon: "html5" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  backend: [
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "spring" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Supabase", icon: "supabase" },
    { name: "Vercel", icon: "vercel" },
  ],
  ai: [
    { name: "OpenAI API", icon: "openai" },
    { name: "RAG", icon: "rag" },
    { name: "Pinecone", icon: "pinecone" },
  ],
};

export const projects = [
  {
      id: 1,
      title: "DreamPath",
      subtitle: "통합형 진로 분석 플랫폼",
      description: "AI 기반 사용자 성향 데이터 분석 및 커리어 패스 제안 통합 진로 분석 플랫폼",
      technologies: ["React", "TypeScript", "python", "Spring Boot", "OpenAI API", "RAG"],
      techStack: {
        Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Axios"],
        Backend: ["Python", "Spring Boot"],
        AI: ["OpenAI API", "RAG", "Pinecone"],
      },
      team: "4명",
      period: "2025.11.13 ~ 12.19",
      githubUrl: "https://github.com/team-gbbd/DreamPath.git",
      details: [
        {
          title: "서비스 전체 프론트엔드 통합",
          items: [
            "30개+ 페이지 UI, 모바일/데스크탑 반응형 대응",
            "시스템 설정 연동 다크모드 + 테마 상태 전역 동기화",
          ],
        },
        {
          title: "RAG 기반 챗봇 풀스택 개발",
          items: [
            "비회원/회원용 FAQ 챗봇, 개인화 AI 어시스턴트",
            "Custom Event 기반 로그인/로그아웃 상태 실시간 동기화",
            "세션별 대화 내역 관리 및 권한별 FAQ 분기 처리",
          ],
        },
        {
          title: "관리자 대시보드 풀스택 개발",
          items: [
            "FAQ CRUD, 사용자/멘토 데이터 테이블 UI + API 연동",
          ],
        },
      ],
  },
  {
    id: 2,
    title: "딥딥빵빵 (DDBB)",
    subtitle: "AI 스마트 베이커리 POS",
    description: "AI 이미지 인식 기반 빵 자동 결제 및 매출/재고 분석 통합 POS 시스템",
    technologies: ["React", "TypeScript", "Zustand", "Chart.js"],
    techStack: {
      Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Axios", "Zustand", "Framer Motion", "Chart.js"],
    },
    team: "5명",
    period: "2025.10.27 ~ 11.10",
    githubUrl: "https://github.com/team-gbbd/ddbb.git",
    details: [
      {
        title: "POS 서비스 전체 프론트엔드 개발",
        items: [
          "9개 페이지 UI (스캐너, 결제, 관리자 대시보드 등)",
          "모바일/데스크탑 반응형 레이아웃",
          "Framer Motion 기반 페이지 전환 애니메이션",
        ],
      },
      {
        title: "AI 빵 스캐너 프론트엔드 개발",
        items: [
          "카메라 촬영 → AI 인식 → 장바구니 자동 추가 UI",
          "Zustand 기반 실시간 장바구니 상태 관리",
        ],
      },
      {
        title: "관리자 대시보드 프론트엔드 개발",
        items: [
          "매출/재고 현황 대시보드, 재고 CRUD UI",
          "Chart.js 기반 AI 분석 결과 시각화 (판매 예측, 성장률 차트)",
        ],
      },
    ],
  },
  {
      id: 3,
      title: "CareerFit",
      subtitle: "취업 컨설팅 플랫폼",
      description: "AI 자소서 첨삭, 1:1 화상면접 컨설팅, 면접 연습 녹화 기능 제공 취업 지원 플랫폼",
      technologies: ["React", "OpenVidu", "PortOne"],
      techStack: {
        Frontend: ["React", "React Router", "Axios", "OpenVidu", "PortOne", "Vite"],
      },
      team: "5명",
      period: "2025.08.11 ~ 09.30",
      githubUrl: "https://github.com/mic-project/mic-project.git",
      details: [
        {
          title: "전체 프론트엔드 아키텍처 설계",
          items: [
            "React 19 + React Router v7 기반 SPA 구조 설계",
            "공통 Layout 컴포넌트를 통한 일관된 헤더/네비게이션 관리",
            "30개+ 페이지 UI 개발 (인증, 예약, 결제, 마이페이지 등)",
          ],
        },
        {
          title: "OpenVidu 기반 1:1 화상면접 UI 개발",
          items: [
            "WebRTC 세션 생성/참여/종료 및 실시간 채팅 구현",
            "Publisher/Subscriber 스트림 관리, 카메라 권한 처리",
          ],
        },
        {
          title: "PortOne(아임포트) 결제 연동",
          items: [
            "컨설턴트 등급별 가격 책정 UI (Junior/Senior/Executive)",
            "결제 SDK 동적 로딩 → 결제 요청 → 서버 검증 플로우 구현",
          ],
        },
        {
          title: "AI 자기소개서 첨삭 UI 개발",
          items: [
            "파일 업로드 / 텍스트 입력 양방향 지원",
            "AI 분석 결과 (요약 + 개선 제안) 시각화",
          ],
        },
        {
          title: "면접 연습 녹화 기능 개발",
          items: [
            "MediaRecorder API를 활용한 웹캠 녹화 구현",
            "랜덤 질문 출제 + 중복 방지 로직",
          ],
        },
      ],
  },
  {
    id: 4,
    title: "닥큐 (DocQ)",
    subtitle: "실시간 병원 예약 및 리뷰 플랫폼",
    description: "병원 예약 및 리뷰 시스템 지원 플랫폼",
    technologies: ["React", "Vite", "React Router", "Axios"],
    techStack: {
      Frontend: ["React", "Vite", "React Router", "Axios"],
    },
    team: "5명",
    period: "2025.06.19 ~ 07.28",
    githubUrl: "https://github.com/mic-project/hospitalreservation.git",
    details: [
      {
        title: "전체 프론트엔드 개발",
        items: [
          "병원 검색/목록, 예약, 리뷰, 마이페이지 등 전체 UI 구현",
          "React Router 기반 SPA 라우팅 구조 설계",
        ],
      },
      {
        title: "예약 시스템 UI 개발",
        items: [
          "실시간 예약 가능 시간 조회 및 예약 생성/취소 UI",
          "예약 내역 조회 및 상태 관리",
        ],
      },
      {
        title: "병원 리뷰 기능 UI 개발",
        items: [
          "병원별 리뷰 작성/조회/수정/삭제 CRUD UI 구현",
          "별점 및 리뷰 목록 시각화",
        ],
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "코리아스픽스(주)",
    position: "연구원",
    period: "2023.04 - 2024.12",
    description: [
      "시/도 토론회 용역 전반 업무",
      "참가자 모집, 설문 및 현장 트러블슈팅",
      "결과보고서 제작 및 사후관리",
    ],
  },
];

export const education = [
  {
    id: 1,
    school: "하이미디어 컴퓨터학원 강남점",
    degree: "생성형 AI 활용 심화 과정",
    period: "2025.10 - 2025.12",
    description: [
      "교육 기간 동안 총 2개의 프로젝트 수행",
      "1차 프로젝트: 프론트엔드 개발 담당",
      "2차 프로젝트: 프론트엔드 개발",
      "  + 생성형 AI 활용 RAG 기반 챗봇 에이전트 구현",
    ],
  },
  {
    id: 2,
    school: "하이미디어 컴퓨터학원 구로점",
    degree: "Spring Boot 활용 풀스택 웹 개발",
    period: "2025.03 - 2025.10",
    description: [
      "교육 기간 동안 총 2개의 프로젝트에서 프론트엔드 개발 전담",
      "사용자 중심의 인터페이스 설계·구현",
      "서비스 사용성 개선",
    ],
  },
  {
    id: 3,
    school: "부천대학교",
    degree: "IT융합비즈니스과",
    period: "2020.03 - 2025.02",
    description: [
      "전문대학 2년 + 전공심화(야간) 과정 2년, 총 4년 재학",
      "개발과 마케팅을 함께 학습",
      "사용자 관점의 서비스 설계 역량 습득",
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "React?",
    excerpt: "React에 관련된 모든 것을 배워봅시다!",
    tags: ["React"],
    url: "https://www.notion.so/React-1c286f02afa480149ccbc479c26e5fbf?source=copy_link",
  },
];

export const navLinks = [
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "NOTION", href: "#notion" },
];