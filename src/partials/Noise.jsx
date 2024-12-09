import {useEffect} from "react";

const Noise = () => {
    // Create noise effect
    useEffect(() => {
        const noise = () => {
            let canvas, ctx;
            let noiseData = [];
            let frame = 0;
            let loopTimeout;
            let resizeTimeout;

            // Create Noise
            const createNoise = () => {
                const idata = ctx.createImageData(canvas.width, canvas.height);
                const buffer32 = new Uint32Array(idata.data.buffer);
                const len = buffer32.length;

                for (let i = 0; i < len; i++) {
                    if (Math.random() < 0.5) {
                        buffer32[i] = 0xff000000;
                    }
                }

                noiseData.push(idata);
            };

            // Play Noise
            const paintNoise = () => {
                if (frame === 9) {
                    frame = 0;
                } else {
                    frame++;
                }

                ctx.putImageData(noiseData[frame], 0, 0);
            };

            // Setup
            const setup = () => {
                if (canvas) {
                    document.body.removeChild(canvas);
                }

                canvas = document.createElement("canvas");
                canvas.style.position = "fixed";
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.pointerEvents = "none";
                canvas.style.zIndex = "1000";
                canvas.style.opacity = "0.2";

                // Set canvas dimensions based on device pixel ratio
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;

                ctx = canvas.getContext("2d");
                ctx.scale(dpr, dpr);

                // Clear previous noise data
                noiseData = [];
                for (let i = 0; i < 10; i++) {
                    createNoise();
                }

                document.body.appendChild(canvas);
            };

            // Handle Resize
            const handleResize = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(setup, 250); // Debounce resize events
            };

            // Loop
            const loop = () => {
                paintNoise();
                loopTimeout = window.setTimeout(() => {
                    window.requestAnimationFrame(loop);
                }, 1000 / 25);
            };

            setup();
            window.addEventListener("resize", handleResize);
            loop();

            // Cleanup function
            return () => {
                window.clearTimeout(loopTimeout);
                window.clearTimeout(resizeTimeout);
                window.removeEventListener("resize", handleResize);
                if (canvas) {
                    document.body.removeChild(canvas);
                }
            };
        };

        const cleanup = noise();
        return () => cleanup();
    }, []);

    return null;
};

export default Noise;
