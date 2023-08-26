import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from "react-router-dom";

import './scss/__main.scss'
import AnimatedRoutes from "./helpers/AnimatedRoutes.jsx";

export default function App() {

    return (
        <Router>
            <AnimatedRoutes/>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
