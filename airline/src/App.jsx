import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import './index.css';


function Home() {
    return (
        <Router>
            <div>
                <h1>Hello</h1>
                <ul>
                    <li className="mr-5">
                        <Link to="/home" className="no-underline text-black">Home</Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}

export default Home;
