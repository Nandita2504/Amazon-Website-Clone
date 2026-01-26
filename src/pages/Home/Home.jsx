import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = ({ searchTerm, selectedCategory, setSelectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    useEffect(() => {
        let result = products;

        if (searchTerm) {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            result = result.filter((p) => p.category === selectedCategory);
        }

        setFilteredProducts(result);
    }, [searchTerm, selectedCategory, products]);

    const categories = ['All', ...new Set(products.map((p) => p.category))];

    return (
        <main className="home-page container">
            <div className="home-banner">
                <div className="banner-content">
                    <h1>Welcome to Amazon Clone</h1>
                    <p>Discover the latest gadgets, fashion, and home decor with premium quality.</p>
                </div>
            </div>

            <div className="home-filters">
                <div className="filter-group">
                    <label>Category:</label>
                    <div className="category-chips">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`chip ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="no-products">
                    <h2>No products found matching "{searchTerm}"</h2>
                    <button onClick={() => setSelectedCategory('All')}>Clear Filters</button>
                </div>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;
