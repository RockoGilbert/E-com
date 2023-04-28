import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
    return (
        <div className="about">
            <h1>About Our Business</h1>
            <p>We are an online wholesaling/dropshipping business that sells a variety of products sourced from around the world. Our mission is to provide high-quality products at competitive prices to retailers and consumers alike.</p>
            <p>If you are interested in buying our products, please visit our <Link to="/store">store</Link> or <Link to="/">homepage</Link>.</p>
        </div>
    );
}


