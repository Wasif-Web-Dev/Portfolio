import React from "react";

const Tools = () => {
    const catdsData = [
        {
            img: "https://framerusercontent.com/images/OkBKDrqon3Bb68s6kPwyucgQiWM.svg",
            title: "Figma",
            description:
                "My dynamic design playground, fostering collaboration to ideate, prototype, and craft stunning UI.",
        },
        {
            img: "https://framerusercontent.com/images/ShqxFytbeYkhONPUSapiYdP123Q.svg",
            title: "Framer",
            description:
                "Framer is the interactive canvas where ideas transform into real website through dynamic design.",
        },
        {
            img: "https://framerusercontent.com/images/xIjO8kNM8oq1qxl3vbLceaVC9V4.svg",
            title: "Webflow",
            description:
                "A digital atelier where visions take shape, creating compelling and responsive websites with ease.",
        },
        {
            img: "https://framerusercontent.com/images/T71G0PZIEJOSPjIOpOIJWRcGbc.svg",
            title: "Shopify",
            description: "My creative workshop for sculpting seamless and visually captivating e-commerce experiences.",
        },
        {
            img: "https://framerusercontent.com/images/qsLnUgE4UonfDyvF7yeGYnHwl9M.svg",
            title: "Notion",
            description:
                "The organized realm for collaborative design, enhancing productivity with clean and effective interfaces.",
        },
        {
            img: "https://framerusercontent.com/images/MjwhxRxhWHM8YpIG5CsCsJgHS2g.svg",
            title: "Spotify",
            description:
                "Designing UI that harmonize with the joy of music discovery and deliver an immersive listening experience.",
        },
    ];

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center  flex-col">
            <div className="w-[35%] flex flex-col items-center justify-center">
                <h1 className="text-white text-5xl font-bold text-center">Tools I Use with Ease</h1>
                <p className="text-white text-md mt-5 opacity-50 text-center">
                    I have gained proficiency in a diverse array of tools, equipping me to craft robust and innovative
                    solutions
                </p>
            </div>
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-10">
                {catdsData.map((item, index) => (
                    <div
                        key={index}
                        className="w-[25vw] flex flex-col justify-evenly items-start h-[30vh] rounded-xl shadow-xl border border-white/10 p-10"
                    >
                        <div className="flex items-center justify-start gap-5">
                            <img className="bg-white/10 p-2 rounded-lg" src={item.img} alt="" />
                            <h1 className="text-white text-2xl font-bold">{item.title}</h1>
                        </div>
                        <div>
                            <p className="text-white text-lg mt-5 opacity-50">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
