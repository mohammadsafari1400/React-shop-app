import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SinglePost from "./components/pages/SinglePost";
import Header from "./components/UI/Header";
import data from "./data";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setPosts(data);
    // eslint-disable-next-line
  }, []);
  // add to cart
  const addToCart = (id) => {
    const check = carts.every((cart) => cart.id !== id);
    if (check) {
      const data = posts.filter((post) => post.id === id);
      setCarts([...carts, ...data]);
    } else {
      alert("This product is on the card");
    }
  };
  return (
    <Router>
      <Header carts={carts} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products posts={posts} addToCart={addToCart} />
        </Route>
        <Route path="/single-post/:id" exact>
          <SinglePost posts={posts} addToCart={addToCart} />
        </Route>
        <Route path="/cart" exact>
          <Cart carts={carts} setCarts={setCarts} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
