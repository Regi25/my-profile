import styles from "./Projects.module.css";
import ProjectCard from "../../common/ProjectCard";
import marvel from "../../assets/marvel.png";
import game from "../../assets/game.png";
import employee from "../../assets/employee.png";
import books from "../../assets/books.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={marvel}
          link="https://github.com/Regi25/marvel-heroes-portal"
          h3="Marvel Heroes"
          p="Hero Database"
        />
        <ProjectCard
          src={employee}
          link="https://github.com/Regi25/employee-management-system"
          h3="Employee Manager"
          p="Manage staff data "
        />
        <ProjectCard
          src={game}
          link="https://github.com/Regi25/aim-game"
          h3="Aim Game"
          p="Hit the dots"
        />
        <ProjectCard
          src={books}
          link="https://github.com/Regi25/bookstore"
          h3="Bookstore"
          p="Digital Library"
        />
      </div>
    </section>
  );
}

export default Projects;
