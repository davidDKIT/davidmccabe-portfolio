import styles from "./ProjectsStyles.module.css";
import fuelbuddy from "../../assets/giffuelbuddy.gif";
import lanelines from "../../assets/lanelines.jpg";
import imagemanipulation from "../../assets/imagemanip.jpg";
import shopapi from "../../assets/shopapi.jpg";
import weatherandstocks from "../../assets/weatherandstocks.png";
import car from "../../assets/autonoumouscar.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fuelbuddy}
          link="https://github.com/ndavido/fuelbuddy"
          h3="Fuelbuddy"
          p="A fuel-saving app that helps drivers optimize routes and track fuel consumption for better efficiency."
        />

        <ProjectCard
          src={car}
          link="https://github.com/DavidCampion/SmartTech_CA2"
          h3="Fully Autonomous Driving Car"
          p="A self-driving car project focused on building an autonomous vehicle with smart navigation capabilities."
        />

        <ProjectCard
          src={lanelines}
          link="https://github.com/DavidCampion/SmartTech_CA1"
          h3="Lane Lines Detection"
          p="A project to identify lane lines in real-time, aiding self-driving cars in safe lane navigation."
        />

        <ProjectCard
          src={shopapi}
          link=""
          h3="Shop API"
          p="A RESTful API built with ASP.NET Core, enabling smooth e-commerce operations and data management."
        />

        <ProjectCard
          src={weatherandstocks}
          link="https://github.com/davidDKIT/weather_stocks_ca"
          h3="Weather and Stocks Application"
          p="A desktop app with a C# GUI that tracks weather and stock market trends in one place."
        />

        <ProjectCard
          src={imagemanipulation}
          link="https://github.com/davidDKIT/CPP-Image-manipulation"
          h3="Image Manipulation Application"
          p="A C++ app for applying image filters like color adjustments, blurring, and sharpening."
        />
      </div>
    </section>
  );
}

export default Projects;
