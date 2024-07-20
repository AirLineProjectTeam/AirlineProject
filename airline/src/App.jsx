import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import Dashboard from './component/pages/dashboard/Dashboard';
import Home from './component/pages/homePage/Homepage';



function App() {
    return (

        <div>
         <Home />
         <Dashboard/>


         


        </div>
    );
}

export default App;
