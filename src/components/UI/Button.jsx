import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button className={`p-4 bg-blue-400 text-lg text-zinc-950 font-bold ${props.className}`}>{props.children}</button>
  )
  
}
Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Button