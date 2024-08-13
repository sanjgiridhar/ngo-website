import React, { useState } from "react";
import "./ProjectsSection.css";

// Correct image imports
import cleanWaterImage from "../assets/clean_water.jpg";
import treePlantationImage from "../assets/tree plantation.jpg"; 
import educationImage from "../assets/education.jpg"; // Fixed typo in file extension

const projectsData = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing clean drinking water to rural areas.",
    status: "Ongoing",
    category: "Water",
    image: cleanWaterImage,
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    description: "Planting trees to combat deforestation.",
    status: "Completed",
    category: "Environment",
    image: treePlantationImage,
  },
  {
    id: 3,
    title: "Education for All",
    description: "Providing education to underprivileged children.",
    status: "Ongoing",
    category: "Education",
    image: educationImage,
  },
  
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("Ongoing");

  const filteredProjects =
    filter === "Ongoing" || filter === "Completed"
      ? projectsData.filter((project) => project.status === filter)
      : projectsData;

  return (
    <section className="projects-section">
      <h2 className="section-title">Our Projects</h2>
      <div className="filters">
        <button className="btn" onClick={() => setFilter("All")}>All</button>
        <button className="btn" onClick={() => setFilter("Ongoing") }>Ongoing</button>
        <button className="btn" onClick={() => setFilter("Completed")}>Completed</button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className={`project-status ${project.status.toLowerCase()}`}>
              {project.status}
            </p>
            <button className="project-button">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
