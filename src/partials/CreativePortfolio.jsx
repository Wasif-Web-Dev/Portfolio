import React from "react";

const CreativePortfolio = () => {
    const portfolioData = [
        {
            img: "https://framerusercontent.com/images/PsUgS0AQsVudVJ6UHjylMZRKA3o.png",
            title: "Lander",
            description: "Lorem ipsum dolor sit, amet consectetur amet sit...",
            year: "2024",
            type: "Landing Page",
        },
        {
            img: "https://framerusercontent.com/images/GXbgbwT3ZYRws3ov23MM5q2HZsc.png",
            title: "SAP",
            description: "Lorem ipsum dolor sit, amet consectetur amet sit...",
            year: "2024",
            type: "Landing Page",
        },
        {
            img: "https://framerusercontent.com/images/X8BJMQcA8RBAkvn52BqshzwyGw.png",
            title: "Waitlisty",
            description: "Lorem ipsum dolor sit, amet consectetur amet sit...",
            year: "2024",
            type: "Landing Page",
        },
    ];
    return (
        <div className="w-full min-h-[100vh]  flex items-center justify-center  flex-col">
            <div className="w-[35%] flex flex-col items-center justify-center">
                <h1 className="text-white text-5xl font-bold">My Creative Portfolios</h1>
                <p className="text-white text-lg mt-5 opacity-50">
                    Explore a showcase of my diverse projects and creations
                </p>
            </div>
            <div className="w-full flex items-center justify-center flex-wrap gap-5">
                {portfolioData.map((item, index) => (
                    <div className="w-[30%] flex items-center justify-center flex-col p-5">
                        <div className="w-full h-[350px] rounded-xl overflow-hidden">
                            <img
                                className="rounded-xl w-full h-full hover:scale-105 transition-all duration-300 object-cover"
                                src={item.img}
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-start mt-5 justify-between flex-col">
                                <h1 className="text-white text-2xl font-bold">{item.title}</h1>
                                <p className="text-white text-lg opacity-50">{item.description}</p>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="bg-white/10 text-white px-2 py-1 rounded-lg border border-white/10">
                                        {item.year}
                                    </button>
                                    <button className="bg-white/10 text-white px-2 py-1 rounded-lg border border-white/10">
                                        {item.type}
                                    </button>
                                </div>
                                <button className="bg-white/10 text-white px-6 py-4 rounded-lg">View Project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreativePortfolio;
