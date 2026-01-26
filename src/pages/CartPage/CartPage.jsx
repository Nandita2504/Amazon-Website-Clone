import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-empty container">
                <div className="empty-content">
                    <ShoppingBag size={80} color="#ccc" />
                    <h2>Your Amazon Cart is empty</h2>
                    <p>Check your Saved for later items or continue shopping.</p>
                    <Link to="/" className="shop-link">Shop now</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <div className="cart-left">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <button className="clear-cart-link" onClick={clearCart}>Deselect all items</button>
                    <span>Price</span>
                </div>

                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/200x200?text=No+Image";
                                        e.target.onerror = null;
                                    }}
                                />
                            </div>
                            <div className="item-details">
                                <div className="item-info-top">
                                    <h3 className="item-title">{item.title}</h3>
                                    <span className="item-price">₹{item.price.toLocaleString('en-IN')}</span>
                                </div>
                                <p className="item-stock">In Stock</p>
                                <div className="item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <div className="action-divider"></div>
                                    <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={16} /> Delete
                                    </button>
                                    <div className="action-divider"></div>
                                    <button className="action-link">Save for later</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-footer">
                    Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'}): <strong>₹{cartTotal.toLocaleString('en-IN')}</strong>
                </div>
            </div>

            <div className="cart-right">
                <div className="checkout-card">
                    <div className="subtotal-msg">
                        Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'}): <strong>₹{cartTotal.toLocaleString('en-IN')}</strong>
                    </div>
                    <div className="gift-checkbox">
                        <input type="checkbox" id="gift" />
                        <label htmlFor="gift">This order contains a gift</label>
                    </div>
                    <button className="checkout-btn">Proceed to Buy</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
