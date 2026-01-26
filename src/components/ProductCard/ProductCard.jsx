import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={16}
                    fill={i <= rating ? "var(--secondary)" : "transparent"}
                    color={i <= rating ? "var(--secondary)" : "#ccc"}
                />
            );
        }
        return stars;
    };

    return (
        <div className="product-card fade-in">
            <Link to={`/product/${product.id}`} className="product-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                {product.rating >= 4.7 && <div className="best-seller-badge">Best Seller</div>}
                <div className="product-badge">{product.category}</div>
                <div className="product-image-container">
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="product-image-img"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
                            e.target.onerror = null;
                        }}
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="product-rating">
                        {renderStars(Math.floor(product.rating))}
                        <span className="rating-num">({product.rating})</span>
                    </div>
                    <div className="product-price-section">
                        <div className="product-price">
                            <span className="currency">₹</span>
                            <span className="price-main">{product.price.toLocaleString('en-IN')}</span>
                        </div>
                        {product.stock < 12 && <span className="urgent-stock">Only {product.stock} left!</span>}
                    </div>
                    <p className="product-description">{product.description}</p>
                </div>
            </Link>
            <div className="card-actions">
                <button
                    className={`add-to-cart-btn-enhanced ${added ? 'added' : ''}`}
                    onClick={handleAddToCart}
                    disabled={added}
                >
                    {added ? (
                        <><Check size={18} /> Added</>
                    ) : (
                        <><ShoppingCart size={18} /> Add to Cart</>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
