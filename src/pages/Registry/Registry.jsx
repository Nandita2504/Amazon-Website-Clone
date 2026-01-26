import React from 'react';
import { Gift, Search, Users, Calendar } from 'lucide-react';
import './Registry.css';

const Registry = () => {
    return (
        <div className="registry-page container fade-in">
            <div className="registry-hero">
                <div className="registry-hero-content">
                    <h1>Registry & Gifting</h1>
                    <p>Whether you're celebrating a wedding, a new baby, or a special milestone, we've got you covered.</p>
                    <div className="hero-actions">
                        <button className="primary-btn">Create a Registry</button>
                        <button className="secondary-btn">Manage Your Registry</button>
                    </div>
                </div>
            </div>

            <div className="registry-search-box">
                <h3>Find a Registry</h3>
                <div className="search-inputs">
                    <input type="text" placeholder="Registrant Name" />
                    <select>
                        <option>Wedding</option>
                        <option>Baby</option>
                        <option>Birthday</option>
                        <option>Custom Event</option>
                    </select>
                    <button className="search-btn"><Search size={20} /></button>
                </div>
            </div>

            <div className="registry-types">
                <div className="type-card">
                    <Users size={50} color="#e47911" />
                    <h3>Wedding Registry</h3>
                    <p>Everything you need for your new home together.</p>
                    <button className="text-link">Learn More</button>
                </div>
                <div className="type-card">
                    <Gift size={50} color="#e47911" />
                    <h3>Baby Registry</h3>
                    <p>Prepare for your new arrival with ease.</p>
                    <button className="text-link">Learn More</button>
                </div>
                <div className="type-card">
                    <Calendar size={50} color="#e47911" />
                    <h3>Birthday & Custom</h3>
                    <p>Make every celebration extra special.</p>
                    <button className="text-link">Learn More</button>
                </div>
            </div>

            <div className="registry-benefits">
                <h2>Why trust Amazon Clone Registry?</h2>
                <div className="benefits-grid">
                    <div className="benefit">
                        <h4>Largest Selection</h4>
                        <p>Millions of items to choose from across every category.</p>
                    </div>
                    <div className="benefit">
                        <h4>Easy Returns</h4>
                        <p>Extended return window for most items.</p>
                    </div>
                    <div className="benefit">
                        <h4>Group Gifting</h4>
                        <p>Multiple friends can chip in for expensive items.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registry;
