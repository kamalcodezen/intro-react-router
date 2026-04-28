import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h2>Post Details Here</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
