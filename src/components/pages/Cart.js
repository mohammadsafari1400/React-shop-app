import { useEffect, useState } from "react";

const Cart = ({ carts, setCarts }) => {
  const [total, setTotal] = useState(0);
  //   getTotal
  const getTotal = () => {
    const res = carts.reduce((prev, next) => {
      return prev + next.price * next.count;
    }, 0);
    setTotal(res);
  };
  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, [carts]);
  //   dec product
  const decProduct = (id) => {
    carts.forEach((cart) => {
      if (cart.id === id) {
        cart.count === 1 ? (cart.count = 1) : (cart.count -= 1);
      }
    });
    setCarts([...carts]);
  };
  //   inc product
  const incProduct = (id) => {
    carts.forEach((cart) => {
      if (cart.id === id) {
        if (cart.count >= 5) {
          alert("ok");
        } else {
          cart.count += 1;
        }
      }
    });
    setCarts([...carts]);
  };
  //   remove handler
  const removeHandler = (id) => {
    if (window.confirm("do you Delete?")) {
      carts.forEach((cart, index) => {
        if (cart.id === id) {
          carts.splice(index, 1);
        }
      });
      setCarts([...carts]);
    }
  };
  return (
    <div>
      <>
        {carts.length > 0 ? (
          <>
            {carts.map((cart) => (
              <li className="cart" key={cart.id}>
                <img src={cart.images[0]} alt={cart.title} />
                <h5>{cart.title}</h5>
                <h5>price: {cart.price}</h5>
                <div className="count">
                  <button onClick={() => decProduct(cart.id)}>-</button>
                  <h5 className="counter">{cart.count}</h5>
                  <button onClick={() => incProduct(cart.id)}>+</button>
                </div>

                <button
                  className="btn-remove"
                  onClick={() => removeHandler(cart.id)}
                >
                  remove
                </button>
              </li>
            ))}
            <div className="total">total : $ {total}</div>
          </>
        ) : (
          <>cart is empty</>
        )}
      </>
    </div>
  );
};

export default Cart;
