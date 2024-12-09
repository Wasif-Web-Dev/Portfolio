import React from "react";
import Navbar from "./partials/Navbar";
import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import Welcome from "./partials/Welcome";
import Home from "./components/Home";

const App = () => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <div className="bg-[#070708] h-[300vh]">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
