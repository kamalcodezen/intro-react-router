import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const usersStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    margin: "10px",
    padding: "10px",
  };

  return (
    <div style={usersStyle}>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <Link to={`/users/${id}`}>User Details</Link>
    </div>
  );
};

export default User;
