import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import Dashboard from './component/pages/dashboard/Dashboard';

function Home() {
    return (
        <Router>
            <div>
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
