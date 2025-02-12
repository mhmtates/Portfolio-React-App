import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div className={`bg-sky-500 text-zinc-950 shadow-md rounded-lg hover:shadow-lg transition duration-300 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired, 
};

export default Card;
