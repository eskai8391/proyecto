import {AnimatePresence} from 'framer-motion'
import {Routes, Route, useLocation} from "react-router-dom";

import Home from '../pages/Home.jsx'
import Calc from '../pages/Calc.jsx'


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="sync">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/calc" element={<Calc/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;