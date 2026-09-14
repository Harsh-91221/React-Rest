import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">My Cart</h1>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p className="cart-empty-text">Your cart is empty. Add some delicious items!</p>
                    <Link to="/" className="checkout-btn">Browse Restaurants</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        <ItemList items={cartItems} />
                    </div>
                    <div className="cart-total">
                        <span className="total-label">Total Amount:</span>
                        <span className="total-amount">₹{getTotalAmount()}</span>
                    </div>
                    <button className="checkout-btn" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
