import React, { useState } from 'react';
import { CreditCard, Smartphone, Mail, Sparkles } from 'lucide-react';
import './GiftCards.css';

const GiftCards = () => {
    const [scratched, setScratched] = useState(false);

    return (
        <div className="gift-cards container fade-in">
            <div className="gc-hero">
                <div className="gc-hero-text">
                    <h1>Amazon Clone Gift Cards</h1>
                    <p>For every occasion, for everyone. Simple, fast, and delightful.</p>
                </div>
            </div>

            <div className="special-offer">
                <h2>Exclusive Offer</h2>
                <div className="scratch-card-container">
                    <div className={`scratch-card ${scratched ? 'scratched' : ''}`} onClick={() => setScratched(true)}>
                        {!scratched ? (
                            <div className="scratch-overlay">
                                <Sparkles size={40} />
                                <p>Click to Reveal Your Reward!</p>
                            </div>
                        ) : (
                            <div className="reward-content fade-in">
                                <h3>Congratulations!</h3>
                                <div className="reward-amount">₹500 BONUS</div>
                                <p>On your next gift card purchase of ₹2,500 or more.</p>
                                <code>CODE: GIFT500OFF</code>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="gc-options">
                <div className="gc-option-card">
                    <Smartphone size={50} color="#e47911" />
                    <h3>eGift Cards</h3>
                    <p>Send via email or text message instantly.</p>
                    <button className="buy-btn">Choose Design</button>
                </div>
                <div className="gc-option-card">
                    <Mail size={50} color="#e47911" />
                    <h3>Print-at-Home</h3>
                    <p>Download and print a card right away.</p>
                    <button className="buy-btn">Browse Styles</button>
                </div>
                <div className="gc-option-card">
                    <CreditCard size={50} color="#e47911" />
                    <h3>Physical Gift Cards</h3>
                    <p>Free one-day shipping with premium packaging.</p>
                    <button className="buy-btn">Order Now</button>
                </div>
            </div>

            <div className="reload-gc">
                <div className="reload-content">
                    <h2>Reload Your Balance</h2>
                    <p>Set up auto-reload so you never run out of balance for your purchases.</p>
                    <div className="reload-actions">
                        <input type="number" placeholder="₹ Amount" />
                        <button className="reload-btn">Reload Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
