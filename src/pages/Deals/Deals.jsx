import React, { useState, useEffect } from 'react';
import { Clock, Tag } from 'lucide-react';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Deals.css';

const Deals = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
    const [dealProducts, setDealProducts] = useState([]);

    useEffect(() => {
        // Select a few products for deals and reduce their price for display
        const discounted = productsData.slice(0, 6).map(p => ({
            ...p,
            oldPrice: (p.price * 1.25).toFixed(2),
            discount: "25% OFF"
        }));
        setDealProducts(discounted);

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="deals-page container fade-in">
            <div className="deals-header">
                <h1>Today's Deals</h1>
                <div className="countdown">
                    <Clock size={20} />
                    <span>Ends in: </span>
                    <span className="timer">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                </div>
            </div>

            <div className="deals-banner">
                <div className="banner-content">
                    <Tag size={40} className="tag-icon" />
                    <h2>EPIC DAILY DEALS</h2>
                    <p>Up to 70% off on top electronics and home decor. New deals every day!</p>
                </div>
            </div>

            <div className="deals-categories">
                <button className="category-btn active">All Deals</button>
                <button className="category-btn">Under $50</button>
                <button className="category-btn">Lightning Deals</button>
                <button className="category-btn">Prime Early Access</button>
            </div>

            <div className="deals-grid">
                {dealProducts.map(product => (
                    <div key={product.id} className="deal-wrapper">
                        <div className="discount-badge">{product.discount}</div>
                        <ProductCard product={product} />
                        <div className="deal-pricing">
                            <span className="old-price">₹{Number(product.oldPrice).toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
