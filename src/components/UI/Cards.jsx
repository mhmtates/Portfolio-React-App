import PropTypes from "prop-types";

const Cards = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-3 md:grid-cols-4 text-zinc-950 p-10 shadow-md rounded-lg mt-12 ml-8 gap-6 ${className}`}>
      {children}
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, 
};

export default Cards;
