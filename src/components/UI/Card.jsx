import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div className={`bg-sky-500 text-zinc-950 shadow-md rounded-lg  ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, 
};

export default Card;
