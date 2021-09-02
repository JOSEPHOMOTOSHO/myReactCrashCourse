import PropTypes from "prop-types";
import Button from "./Buttons";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>Task Tracker that has a prop{title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

// Header.defaultProps = {
//   title: "I am a property of the header component hahahahahah",
// };

// const headingStyles = {
//   color: "red",
//   backgroundColor: "Black",
//   fontSize: "100px",
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
