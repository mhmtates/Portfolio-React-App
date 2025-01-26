import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button className={`p-4 bg-blue-400 text-lg text-white ${props.className}`}>{props.children}</button>
  )
  
}
Button.propTypes = {
    className: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
}

export default Button