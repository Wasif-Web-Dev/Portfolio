import React from "react";
import Welcome from "../partials/Welcome";

const Home = () => {
    return (
        <div className="h-[80vh] w-full flex items-center flex-col justify-center mt-5">
            <div className="w-[45%]  flex flex-col items-center justify-center  gap-2 ">
                <Welcome />
                <h1 className="text-white text-5xl leading-none font-bold mt-5 text-center">
                    Revitalize Your Digital Impact through Boundless Creativity
                </h1>
                <p className="text-white text-md text-center mt-5 opacity-50">
                    I am a passionate and experienced web designer, dedicated to creating visually stunning and highly
                    functional websites. Explore my portfolio to see the power of effective design in action
                </p>
                <button className="bg-red-600 mt-6 text-black px-5 py-3 rounded-xl shadow-[0_0_20px_2px_rgba(239,68,68,0.9)]">Let's Work Together</button>
            </div>
        </div>
    );
};

export default Home;
