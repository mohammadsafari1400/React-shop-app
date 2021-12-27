import { Link } from "react-router-dom";
const Header = ({ carts }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>T-shirt</h1>
      </div>
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Product</li>
        </Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="shop">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>{carts.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
