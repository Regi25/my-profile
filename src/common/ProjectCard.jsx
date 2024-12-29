import PropTypes from "prop-types";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blanc">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string,
  p: PropTypes.string,
};

export default ProjectCard;
