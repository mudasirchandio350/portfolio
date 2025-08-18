export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: "web" | "ai" | "mobile" | "devops" | "other";
  status: "completed" | "in-progress" | "planned";
  createdAt: Date;
  updatedAt: Date;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Fullstack Job-board",
    description:
      "Fullstack job board where you find latest job postings and apply for them",
    longDescription: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mongo DB"],
    image: "/ai.jpg",
    githubUrl: "https://github.com/username/ai-task-manager",
    liveUrl: "https://ai-task-manager.vercel.app",
    featured: true,
    category: "web",
    status: "completed",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-02-20"),
  },
];

// Helper functions for project management
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((project) => project.status === status);
};

export const addProject = (
  project: Omit<Project, "id" | "createdAt" | "updatedAt">
): Project => {
  const newProject: Project = {
    ...project,
    id: (projects.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  projects.push(newProject);
  return newProject;
};

export const updateProject = (
  id: string,
  updates: Partial<Omit<Project, "id" | "createdAt">>
): Project | null => {
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return null;
  }

  projects[projectIndex] = {
    ...projects[projectIndex],
    ...updates,
    updatedAt: new Date(),
  };

  return projects[projectIndex];
};

export const deleteProject = (id: string): boolean => {
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return false;
  }

  projects.splice(projectIndex, 1);
  return true;
};
