import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Check, ArrowLeft, Star } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const prod = productsData.find((p) => p.id === Number(id));
        setProduct(prod);

        if (prod) {
            const similar = productsData
                .filter((p) => p.category === prod.category && p.id !== prod.id)
                .slice(0, 4);
            setSimilarProducts(similar);
        }

        // Scroll to top when product ID changes
        window.scrollTo(0, 0);
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;
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

    if (!product) {
        return (
            <div className="product-detail container">
                <p>Loading product...</p>
            </div>
        );
    }

    return (
        <div className="product-detail container">
            <Link to="/" className="back-link">
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className="detail-grid">
                <div className="image-section">
                    <img
                        src={product.image}
                        alt={product.title}
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x600?text=Image+Not+Available";
                            e.target.onerror = null;
                        }}
                    />
                </div>
                <div className="info-section">
                    <h1 className="title">{product.title}</h1>
                    <div className="detail-rating">
                        {renderStars(Math.floor(product.rating))}
                        <span>({product.rating} / 5)</span>
                    </div>
                    <p className="category">Category: {product.category}</p>
                    <p className="description">{product.description}</p>
                    <div className="price-container">
                        <p className="price">
                            <span className="currency">₹</span>
                            <span className="price-main">{product.price.toLocaleString('en-IN')}</span>
                        </p>
                        <p className="stock">
                            In Stock: <span className={product.stock < 15 ? 'low-stock' : ''}>{product.stock}</span>
                        </p>
                    </div>
                    <button
                        className={`add-to-cart-btn ${added ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={added}
                    >
                        {added ? (
                            <>
                                <Check size={18} /> Added to Cart
                            </>
                        ) : (
                            <>
                                <ShoppingCart size={18} /> Add to Cart
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="reviews-section">
                <h2>Customer Reviews</h2>
                {product.reviews && product.reviews.length > 0 ? (
                    <div className="reviews-list">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-header">
                                    <span className="review-user">{review.user}</span>
                                    <div className="review-rating">{renderStars(review.rating)}</div>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews yet for this product.</p>
                )}
            </div>

            {similarProducts.length > 0 && (
                <div className="similar-section">
                    <h2>Similar Items</h2>
                    <div className="similar-grid">
                        {similarProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
