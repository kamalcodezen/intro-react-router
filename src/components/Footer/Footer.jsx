import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <p>
        <small>This is Footer</small>
        <Link to="/fb">Facebook</Link>
        <Link to="/x">X</Link>
      </p>
    </div>
  );
};

export default Footer;
