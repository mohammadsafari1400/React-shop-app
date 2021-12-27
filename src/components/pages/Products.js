import Posts from "../shop/Posts";

const Products = ({ posts, addToCart }) => {
  return (
    <div>
      <Posts posts={posts} addToCart={addToCart} />
    </div>
  );
};

export default Products;
