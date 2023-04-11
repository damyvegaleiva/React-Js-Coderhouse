import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/cart')}>
      <span>🛒</span>
      <span>{cart.length}</span>
    </div>
  );
}

export default CartWidget;