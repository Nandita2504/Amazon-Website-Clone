import React from 'react';
import { DollarSign, Globe, ChartBar, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import './Sell.css';

const Sell = () => {
    return (
        <div className="sell-page container fade-in">
            <div className="sell-hero">
                <div className="sell-hero-grid">
                    <div className="sell-hero-text">
                        <h1>Become an Amazon Clone Seller</h1>
                        <p>Half of the units sold in our stores are from independent sellers. Join our community today.</p>
                        <button className="start-selling-btn">Start Selling</button>
                        <p className="pricing-note">₹2,999 a month + selling fees</p>
                    </div>
                    <div className="sell-hero-image">
                        <Globe size={300} color="rgba(255,255,255,0.1)" />
                    </div>
                </div>
            </div>

            <div className="why-sell">
                <h2>Why sell on Amazon Clone?</h2>
                <div className="perks-grid">
                    <div className="perk">
                        <ChartBar size={40} color="#e47911" />
                        <h3>Massive Reach</h3>
                        <p>Reach hundreds of millions of customers who shop across our stores globally.</p>
                    </div>
                    <div className="perk">
                        <TrendingUp size={40} color="#e47911" />
                        <h3>Scale with Ease</h3>
                        <p>Use our tools to build, manage, and scale your business with reliable infrastructure.</p>
                    </div>
                    <div className="perk">
                        <ShieldCheck size={40} color="#e47911" />
                        <h3>Secure Payments</h3>
                        <p>Amazon Clone facilitates the payment process and sends funds to your bank account.</p>
                    </div>
                </div>
            </div>

            <div className="onboarding-steps">
                <h2>How to get started</h2>
                <div className="steps-list">
                    <div className="step-item">
                        <div className="step-num">1</div>
                        <div>
                            <h3>Choose a selling plan</h3>
                            <p>The Individual plan costs ₹40 per unit sold, and the Professional plan costs ₹2,999 per month.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">2</div>
                        <div>
                            <h3>Register your account</h3>
                            <p>You'll need your business info, credit card, and government-issued ID.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">3</div>
                        <div>
                            <h3>List your products</h3>
                            <p>Create your product listings in Seller Central or via API.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-preview">
                <div className="preview-content">
                    <Zap size={40} color="#febd69" />
                    <h2>Seller Dashboard</h2>
                    <p>Get a high-level view of your business performance, inventory, and sales trends.</p>
                    <div className="dummy-stats">
                        <div className="stat"><span>Total Sales</span> <strong>₹12,45,000</strong></div>
                        <div className="stat"><span>Orders</span> <strong>142</strong></div>
                        <div className="stat"><span>Messages</span> <strong>3 New</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;
