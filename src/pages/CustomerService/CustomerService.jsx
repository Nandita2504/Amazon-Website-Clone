import React, { useState } from 'react';
import { Package, RefreshCcw, CreditCard, User, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './CustomerService.css';

const CustomerService = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "Where is my order?", a: "You can track your order in the 'Returns & Orders' section of your account. Tracking numbers are updated once the item ships." },
        { q: "How do I return an item?", a: "To return an item, go to 'Your Orders', selected the item you wish to return, and click 'Return or Replace items'. Follow the instructions to print your label." },
        { q: "What is the status of my refund?", a: "Refunds are typically processed within 3-5 business days after we receive your return item." },
        { q: "Can I cancel my order?", a: "You can cancel an order as long as it hasn't entered the shipping process. Go to 'Your Orders' to see if cancellation is available." }
    ];

    return (
        <div className="customer-service container fade-in">
            <div className="cs-header">
                <h1>Hello. What can we help you with?</h1>
            </div>

            <div className="cs-grid">
                <div className="cs-card">
                    <Package size={40} color="#e47911" />
                    <div className="cs-card-info">
                        <h3>Your Orders</h3>
                        <p>Track packages, edit or cancel orders</p>
                    </div>
                </div>
                <div className="cs-card">
                    <RefreshCcw size={40} color="#e47911" />
                    <div className="cs-card-info">
                        <h3>Returns & Refunds</h3>
                        <p>Return or replace items, find return label</p>
                    </div>
                </div>
                <div className="cs-card">
                    <CreditCard size={40} color="#e47911" />
                    <div className="cs-card-info">
                        <h3>Payment Settings</h3>
                        <p>Add or edit payment methods, check gift card balance</p>
                    </div>
                </div>
                <div className="cs-card">
                    <User size={40} color="#e47911" />
                    <div className="cs-card-info">
                        <h3>Your Account</h3>
                        <p>Update login, profile, and security settings</p>
                    </div>
                </div>
            </div>

            <div className="faq-section">
                <h2>Quick Solutions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span>{faq.q}</span>
                                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openFaq === index && <div className="faq-answer">{faq.a}</div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-support">
                <h3>Need more help?</h3>
                <button className="contact-btn">Contact Our Support Team</button>
            </div>
        </div>
    );
};

export default CustomerService;
