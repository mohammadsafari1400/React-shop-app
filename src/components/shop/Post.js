import { Link } from "react-router-dom";
const Post = ({ post, addToCart }) => {
  return (
    <li className="post">
      <Link to={`single-post/${post.id}`}>
        <img src={post.images[0]} alt={post.title} />
      </Link>
      <Link to={`single-post/${post.id}`}>
        <h5 className="title">{post.title}</h5>
      </Link>
      <button className="add-btn" onClick={() => addToCart(post.id)}>
        Add to cart
      </button>
    </li>
  );
};

export default Post;
