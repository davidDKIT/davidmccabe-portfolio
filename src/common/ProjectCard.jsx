import React from "react";

function ProjectCard({src}) {
  return (
    <a href="https://github.com/ndavido/fuelbuddy">
      <img className="hover" src={src} alt="fuelbuddy logo" />
      <h3>fuelbuddy</h3>
      <p>Fuel Saving Application</p>
    </a>
  );
}

export default ProjectCard;
