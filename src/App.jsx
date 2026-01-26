import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Deals from './pages/Deals/Deals';
import CustomerService from './pages/CustomerService/CustomerService';
import Registry from './pages/Registry/Registry';
import GiftCards from './pages/GiftCards/GiftCards';
import Sell from './pages/Sell/Sell';
import { CartProvider } from './context/CartContext';
import './styles/global.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchTerm={searchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
          <footer style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#232f3e',
            color: 'white',
            marginTop: '50px'
          }}>
            <p>&copy; 2026 Amazon Clone. Built with React & JSON.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
