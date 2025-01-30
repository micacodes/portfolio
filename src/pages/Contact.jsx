import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A Django-based e-commerce platform.",
    },
    {
      title: "Project 2",
      description: "A Laravel-powered CRM system.",
    },
    {
      title: "Project 3",
      description: "A Flask API for data analytics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;