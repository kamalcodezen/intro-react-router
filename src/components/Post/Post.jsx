import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <p>{title}</p>
      <Link to={`/posts/${id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;
