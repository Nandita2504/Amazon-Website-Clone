import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, MapPin, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = ({ onSearch, onCategoryChange }) => {
    const { cartCount } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        navigate('/');
    };

    const handleCategorySelect = (e) => {
        onCategoryChange(e.target.value);
        navigate('/');
    };

    return (
        <header className="navbar">
            <div className="navbar-top">
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">Amazon</span><span className="logo-dot">.clone</span>
                </Link>

                <div className="navbar-delivery">
                    <MapPin size={18} />
                    <div className="delivery-info">
                        <span className="delivery-to">Deliver to</span>
                        <span className="delivery-location">India</span>
                    </div>
                </div>

                <form className="navbar-search" onSubmit={handleSearch}>
                    <select className="search-category" onChange={handleCategorySelect}>
                        <option value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Home">Home</option>
                        <option value="Wearables">Wearables</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search Amazon Clone"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <Search size={22} />
                    </button>
                </form>

                <div className="navbar-nav">
                    <div className="nav-item">
                        <span className="nav-line-1">Hello, sign in</span>
                        <span className="nav-line-2">Account & Lists</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-line-1">Returns</span>
                        <span className="nav-line-2">& Orders</span>
                    </div>
                    <Link to="/cart" className="nav-cart">
                        <div className="cart-icon-container">
                            <ShoppingCart size={30} />
                            <span className="cart-count">{cartCount}</span>
                        </div>
                        <span className="nav-line-2">Cart</span>
                    </Link>
                </div>
            </div>

            <div className="navbar-bottom">
                <div className="nav-menu" onClick={() => { onCategoryChange('All'); navigate('/'); }}>
                    <Menu size={20} />
                    <span>All</span>
                </div>
                <ul className="nav-links">
                    <li><Link to="/deals">Today's Deals</Link></li>
                    <li><Link to="/customer-service">Customer Service</Link></li>
                    <li><Link to="/registry">Registry</Link></li>
                    <li><Link to="/gift-cards">Gift Cards</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
