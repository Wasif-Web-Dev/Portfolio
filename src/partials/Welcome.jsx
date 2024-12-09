import React, {useEffect} from "react";

const Welcome = () => {
    useEffect(() => {
        const hand = document.querySelector(".hand");

        const waveHand = () => {
            // Wave animation sequence
            const angles = [30, -30, 30, -20, 0];
            let step = 0;

            const wave = setInterval(() => {
                if (step < angles.length) {
                    hand.style.transform = `rotate(${angles[step]}deg)`;
                    step++;
                } else {
                    clearInterval(wave);
                }
            }, 200);
        };

        // Trigger wave animation every 3 seconds
        const waveInterval = setInterval(waveHand, 3000);

        return () => clearInterval(waveInterval);
    }, []);

    return (
        <div className="text-white h-6 w-fill rounded-full bg-[#070708] border-2 border-white flex items-center justify-start p-4">
            <span className="hand inline-block origin-bottom mr-2 px-1 rounded-full transition-all duration-300 bg-[#131316]">
                🖐️
            </span>{" "}
            Wasif Welcome's You!
        </div>
    );
};

export default Welcome;
