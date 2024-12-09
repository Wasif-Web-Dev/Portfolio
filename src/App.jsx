import React from "react";
import Navbar from "./partials/Navbar";
import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import Welcome from "./partials/Welcome";
import Home from "./components/Home";
import Noise from "./partials/Noise";
import CreativePortfolio from "./partials/CreativePortfolio";
import Customers from "./partials/Customers";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom";

const App = () => {
    // Initialize Lenis
    // const lenis = new Lenis();

    // // Use requestAnimationFrame to continuously update the scroll
    // function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    return (
        <div className="bg-[#070708] min-h-[400vh] text-white">
            <Noise />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
