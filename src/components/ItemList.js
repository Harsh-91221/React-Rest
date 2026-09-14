import { useDispatch } from "react-redux";
import { CDN_URL, ITEM_IMG_CDN_URL } from "../utils/constants";
import { addItem, increaseItem, decreaseItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleIncrease = (itemId) => {
        dispatch(increaseItem(itemId));
    };

    const handleDecrease = (itemId) => {
        dispatch(decreaseItem(itemId));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const getItemPrice = (item) => {
        if (item.card.info.price) return item.card.info.price / 100;
        if (item.card.info.defaultPrice) return item.card.info.defaultPrice / 100;
        return 0;
    };

    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.card.info.id} className="cart-item">
                    <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.card.info.name}</h4>
                        <p className="cart-item-price">
                            ₹{getItemPrice(item)}
                        </p>
                        {item.card.info.description && (
                            <p className="cart-item-description">{item.card.info.description.substring(0, 80)}...</p>
                        )}
                    </div>
                    <div className="cart-item-media">
                        {item.card.info.imageId && (
                            <img
                                src={ITEM_IMG_CDN_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                                className="cart-item-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                        <div className="cart-item-controls">
                            <div className="quantity-control">
                                <button
                                    className="qty-btn"
                                    onClick={() => handleDecrease(item.card.info.id)}
                                >
                                    −
                                </button>
                                <span className="qty-value">
                                    {item.quantity || 1}
                                </span>
                                <button
                                    className="qty-btn"
                                    onClick={() => handleIncrease(item.card.info.id)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => handleRemove(item.card.info.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;