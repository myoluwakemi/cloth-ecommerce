import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";

import {Button} from 'reactstrap'
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

   const gotoCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen)
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))): <span className="empty-message">Your cart is empty</span>}
       
      </div>
      
      <Button color="primary" onClick={gotoCheckoutHandler}>
        {" "}
        Checkout
      </Button>
    </div>
  );
};
export default CartDropdown;
