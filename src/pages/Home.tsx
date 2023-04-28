import React from "react";
import { Store } from './Store'
import { Link } from 'react-router-dom'
import './Home.css'


export function Home() {
    return (
        <div className="home">
            <h1>Welcome to our online store</h1>
            <p>We sell a variety of unique items that we've found in our travels.</p>
            <Link to="store">
                <button onClick={Store}>Shop Now</button>
            </Link>
        </div>
    );
}