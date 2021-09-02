import PropTypes from "prop-types";

const Buttons = ({ color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Buttons.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Buttons.defaultProps = {
  color: "steelblue",
};
export default Buttons;
