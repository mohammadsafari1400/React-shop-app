import Post from "./Post";

const Posts = ({ posts, addToCart }) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default Posts;
