"use client";
import React, { useState } from "react";
import { Lora } from "next/font/google";
import { ComicText } from "./magicui/comic-text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { projects, getFeaturedProjects, Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Tag, Search } from "lucide-react";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });

const Projects = () => {
  const [filter, setFilter] = useState<
    "all" | "featured" | "web" | "ai" | "devops" | "mobile" | "other"
  >("all");
  const [displayLimit, setDisplayLimit] = useState(6);

  const getFilteredProjects = (): Project[] => {
    let filtered = projects;

    if (filter === "featured") {
      filtered = getFeaturedProjects();
    } else if (filter !== "all") {
      filtered = projects.filter((project) => project.category === filter);
    }

    return filtered.slice(0, displayLimit);
  };

  const filteredProjects = getFilteredProjects();
  const hasMore =
    filter === "all"
      ? projects.length > displayLimit
      : filter === "featured"
      ? getFeaturedProjects().length > displayLimit
      : projects.filter((project) => project.category === filter).length >
        displayLimit;

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getCategoryColor = (category: Project["category"]) => {
    switch (category) {
      case "ai":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "web":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      case "devops":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "mobile":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const filterButtons = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "web", label: "Web" },
    { key: "ai", label: "AI" },
    { key: "devops", label: "DevOps" },
    { key: "mobile", label: "Mobile" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 w-full" id="projects">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ComicText fontSize={3}>My Projects</ComicText>
          <p
            className={`text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto ${lora.className}`}
          >
            Explore my portfolio of innovative projects spanning web
            development, AI solutions, and DevOps automation. Each project
            represents a unique challenge solved with cutting-edge technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filterButtons.map((button) => (
            <Button
              key={button.key}
              variant={filter === button.key ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setFilter(button.key as typeof filter);
                setDisplayLimit(6);
              }}
              className={`transition-all duration-300 ${
                filter === button.key
                  ? "bg-gradient-to-r from-green-400 to-indigo-400 hover:from-green-500 hover:to-indigo-500 text-white border-0"
                  : "hover:bg-gradient-to-r hover:from-green-400 hover:to-indigo-400 hover:text-white hover:border-transparent"
              }`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-sky-900 to-green-900"
                  : "bg-gradient-to-br from-green-900 to-indigo-900"
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Status and Category Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status.replace("-", " ")}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>
              )}

              <CardHeader className="text-white">
                <CardTitle className="text-xl font-bold group-hover:text-yellow-100 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/90 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-white space-y-4">
                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={16} className="text-white/80" />
                    <span className="text-sm font-medium text-white/80">
                      Technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md border border-white/20">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Created Date */}
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar size={16} />
                  <span>Created: {project.createdAt.toLocaleDateString()}</span>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex gap-2 w-full">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={() => setDisplayLimit((prev) => prev + 6)}
              className="bg-gradient-to-r from-green-400 to-indigo-400 hover:from-green-500 hover:to-indigo-500 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Load More Projects
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className=" mb-4 w-full flex items-center justify-center">
              <Search size={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filter to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
