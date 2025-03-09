import React, { useState } from "react";
import "./App.css"; // Separate CSS file
import Imdb from "./Movie_Search/Imdb";
import Dashboard from "./DashboardGame/Dashboard";
import ElectricBulb from "./Bulb/ElectricBulb";
import DynamicImage from "./Dynamic-Image/DynamicImage";
import Table from "./Table/Table";
import ActorsMovies from "./Actors/ActorsMovies ";
import Amazon from "./Amazon-project/Amazon";


const projectsList = [
  { title: "🎬 Imdb", component: <Imdb /> },
  { title: "🪙 Coin Game", component: <Dashboard /> },
  { title: "💡 Electric Bulb", component: <ElectricBulb /> },
  { title: "🖼️ Dynamic Image", component: <DynamicImage /> },
  { title: "📊 Table", component: <Table /> },
  { title: "🎭 Actors Movie", component: <ActorsMovies/>},
  { title: "🛒 Amazon", component: <Amazon /> }

];

const PhotoPortfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="portfolio-container">
      <h1 className="name">I Am <span>Pooja Nalode</span></h1>
      <h2 className="subtitle">Welcome to My Portfolio</h2>

      {activeProject !== null ? (
        <div className="active-project-container">
          <div className="project-component">
            {projectsList[activeProject].component}
            <div className="back-button-container">
            <button className="back-button" onClick={() => setActiveProject(null)}>
              ← Back to Portfolio
            </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card" onClick={() => setActiveProject(index)}>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoPortfolio;
