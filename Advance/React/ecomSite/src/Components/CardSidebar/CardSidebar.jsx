import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decreaseqty,
  increaseqty,
  removeFromCart,
} from "../../Slice/cartSlice";
import "./CardSidebar.css";
const CardSidebar = ({ isOpen, closeCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };
  return (
    <>
      {isOpen && <div className="cartOverlay" onClick={closeCart} />}
      <div className={`cartSidebar ${isOpen ? "open" : ""}`}>
        <div className="cartHeader">
          <h2>Your Cart ({totalQty})</h2>

          <button onClick={closeCart} aria-label="Close cart">
            X
          </button>
        </div>

        <div className="cartItems">
          {items.length === 0 && (
            <div className="emptyCart">
              <h3>Your cart is empty!</h3>
              <p>Add some products.</p>
            </div>
          )}
          {items.map((item) => (
            <div className="cartItem" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cartItemInfo">
                <h4>{item.title}</h4>

                <p>${item.price.toFixed(2)}</p>

                <div className="qtyControls">
                  <button
                    onClick={() => dispatch(decreaseqty(item.id))}
                    disabled={item.qty <= 1}
                    aria-label="Decrease quantity"
                  >
                  -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => dispatch(increaseqty(item.id))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="removeBtn"
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label={`Remove ${item.title}`}
              ><i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="cartFooter">
          <div className="cartTotal">
            <h3>Total</h3>
            <h3>${total.toFixed(2)}</h3>
          </div>

          <button
            className="checkoutBtn"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </button>

          <button
            className="clearBtn"
            onClick={() => dispatch(clearCart())}
            disabled={items.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSidebar;