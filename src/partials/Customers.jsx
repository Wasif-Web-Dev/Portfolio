import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Customers = () => {
    const marqueeRef = useRef(null);
    const marqueeRef2 = useRef(null);

    const happyCustomersData = [
        {
            profilePic: "https://framerusercontent.com/images/GPWJsEvdSYoZl1WODaYrsgS4b4.png",
            name: "Lisa Anderson",
            role: "CEO @ tastent",
            Review: "am amazed by Pragadesh's talent and expertise in web design. He took my vision and turned it into a visually stunning website. I couldn't be more thrilled!",
        },
        {
            profilePic: "https://framerusercontent.com/images/1BcKzcKVcwgUujLjCHSnAoxB8Pw.png",
            name: "Michael Smith",
            role: "Founder of Klothink",
            Review: "Pragadesh is a web design genius! He captured my brand perfectly and created a website that truly represents who I am. I highly recommend him!",
        },
        {
            profilePic: "https://framerusercontent.com/images/ADvgzlq4G0L0M8RC4JwDFraxlqg.png",
            name: "Sarah Thompson ",
            role: "Founder & CEO",
            Review: "Pragadesh is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary.",
        },
        {
            profilePic: "https://framerusercontent.com/images/JQZXhh18HrLYlba3AIp3eP6Zmo.png",
            name: "John Anderson",
            role: "Entrepreneur",
            Review: "I am thrilled with the website that Pragadesh designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive.",
        },
        {
            profilePic: "https://framerusercontent.com/images/ADvgzlq4G0L0M8RC4JwDFraxlqg.png",
            name: "Sarah Thompson",
            role: "Founder & CEO",
            Review: "Pragadesh is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary.",
        },
        {
            profilePic: "https://framerusercontent.com/images/JQZXhh18HrLYlba3AIp3eP6Zmo.png",
            name: "John Anderson   ",
            role: "Entrepreneur",
            Review: "I am thrilled with the website that Pragadesh designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive.",
        },
        {
            profilePic: "https://framerusercontent.com/images/pRpjBsBzzKLVhHtcbkYaMlXQmY.png",
            name: "Mark Davis",
            role: "Marketing Manager",
            Review: "Pragadesh's creativity and technical expertise transformed our website into a visually stunning and highly functional platform. We also did a lot of sales.",
        },
        {
            profilePic: "https://framerusercontent.com/images/E65n2dbran8wMlgLfclxxZKjUcw.png",
            name: "Emily Roberts",
            role: "Small Business Owner",
            Review: "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional, and he brought my ideas to life in ways I couldn't have imagined. ",
        },
        {
            profilePic: "https://framerusercontent.com/images/zi7Ft6eXzEpePpXVT0P5BVxPaiI.png",
            name: "Laura Adams",
            role: "Creative Director",
            Review: "Pragadesh is an outstanding web designer who exceeded my expectations. His ability to combine aesthetics and functionality is remarkable. I highly recommend him.",
        },
    ];

    const happyCustomersData2 = [...happyCustomersData];

    useGSAP(() => {
        const getAnimationConfig = () => {
            const vw = window.innerWidth;
            // Adjust speed and distance based on viewport width
            if (vw < 640) {
                return {distance: 100, duration: 15};
            } else if (vw < 1024) {
                return {distance: 150, duration: 20};
            } else if (vw < 1920) {
                return {distance: 200, duration: 8};
            } else {
                return {distance: 250, duration: 10};
            }
        };

        let config = getAnimationConfig();

        const anim1 = gsap.to(marqueeRef.current, {
            x: -config.distance,
            repeat: -1,
            duration: config.duration,
            ease: "none",
            yoyo: true,
        });

        const anim2 = gsap.to(marqueeRef2.current, {
            x: config.distance,
            repeat: -1,
            duration: config.duration,
            ease: "none",
            yoyo: true,
        });

        const handleResize = () => {
            config = getAnimationConfig();

            anim1.kill();
            gsap.set(marqueeRef.current, {x: 0});
            gsap.to(marqueeRef.current, {
                x: -config.distance,
                repeat: -1,
                duration: config.duration,
                ease: "none",
                yoyo: true,
            });

            // Update second animation
            anim2.kill();
            gsap.set(marqueeRef2.current, {x: 0});
            gsap.to(marqueeRef2.current, {
                x: config.distance,
                repeat: -1,
                duration: config.duration,
                ease: "none",
                yoyo: true,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            anim1.kill();
            anim2.kill();
        };
    }, []);

    return (
        <div className="w-full min-h-screen  2xxl:min-h-[40vh] py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 min-[3840px]:py-28 min-[4500px]:py-32 min-[5000px]:py-36 flex items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 min-[3840px]:gap-14 min-[4500px]:gap-16 min-[5000px]:gap-20 flex-col">
            <div className="w-full flex flex-col items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl min-[3840px]:text-[7rem] min-[4500px]:text-[8rem] min-[5000px]:text-[9rem] font-roslindale text-center">
                    Happy & Satisfied Faces
                </h1>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl min-[3840px]:text-3xl min-[4500px]:text-4xl min-[5000px]:text-5xl text-center max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl min-[3840px]:max-w-3xl min-[4500px]:max-w-4xl min-[5000px]:max-w-5xl">
                    Here's what some of my satisfied clients have to say about my work
                </p>
            </div>
            <div className="w-full overflow-hidden flex flex-col items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 min-[3840px]:gap-14 min-[4500px]:gap-16 min-[5000px]:gap-20 relative">
                <div className="absolute left-0 w-[5%] h-full bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm z-10"></div>
                <div className="absolute right-0 w-[5%] h-full bg-gradient-to-l from-black/70 to-transparent backdrop-blur-sm z-10"></div>

                <div
                    ref={marqueeRef}
                    className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 min-[3840px]:gap-12 min-[4500px]:gap-14 min-[5000px]:gap-16 w-fit"
                >
                    {happyCustomersData.map((Data, Id) => (
                        <div
                            key={Id}
                            className={`h-[25vh] bg-white/10 xs:h-[26vh] sm:h-[32vh] md:h-[36vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] 2xxl:h-[25vh] 3830:h-[18vh]   rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl w-[200px] xs:w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[550px] 2xl:w-[550px] 3830:w-[800px] min-[4500px]:w-[700px] min-[5000px]:w-[800px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 min-[3840px]:p-12 min-[4500px]:p-14 min-[5000px]:p-16 flex-shrink-0 flex flex-col justify-around  gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
                                    <img
                                        className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 min-[3840px]:w-20 min-[3840px]:h-20 min-[4500px]:w-24 min-[4500px]:h-24 min-[5000px]:w-28 min-[5000px]:h-28 rounded-full border border-white/10"
                                        src={Data.profilePic}
                                        alt=""
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl min-[3840px]:text-5xl min-[4500px]:text-6xl min-[5000px]:text-7xl font-roslandale">
                                            {Data.name}
                                        </h1>
                                        <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl min-[5000px]:text-4xl">
                                            {Data.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-xs xs:text-sm sm:text-base  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl min-[3840px]:text-4xl min-[4500px]:text-5xl min-[5000px]:text-6xl rounded-full px-1.5 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 font-roslandale">
                                    <span className="text-red-500 ">
                                        <i class="ri-star-fill"></i>
                                    </span>{" "}
                                    5.0
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[3840px]:text-3xl min-[4500px]:text-4xl min-[5000px]:text-5xl opacity-70 font-roslandale">
                                    {Data.Review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    ref={marqueeRef2}
                    className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 min-[3840px]:gap-12 min-[4500px]:gap-14 min-[5000px]:gap-16 w-fit"
                >
                    {happyCustomersData2.map((Data, Id) => (
                        <div
                            key={Id}
                            className={`h-[25vh] bg-white/10 xs:h-[26vh] sm:h-[32vh] md:h-[36vh] lg:h-[40vh] xl:h-[42vh]  2xl:h-[40vh] 2xxl:h-[25vh] 3830:h-[18vh]  rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl w-[200px] xs:w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[550px] 2xl:w-[550px] 3830:w-[800px] min-[4500px]:w-[700px] min-[5000px]:w-[800px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 min-[3840px]:p-12 min-[4500px]:p-14 min-[5000px]:p-16 flex-shrink-0 flex flex-col justify-around gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
                                    <img
                                        className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 min-[3840px]:w-20 min-[3840px]:h-20 min-[4500px]:w-24 min-[4500px]:h-24 min-[5000px]:w-28 min-[5000px]:h-28 rounded-full border border-white/10"
                                        src={Data.profilePic}
                                        alt=""
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl min-[3840px]:text-5xl min-[4500px]:text-6xl min-[5000px]:text-7xl font-roslandale">
                                            {Data.name}
                                        </h1>
                                        <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl min-[5000px]:text-4xl">
                                            {Data.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-xs xs:text-sm sm:text-base flex items-center justify-center gap-1 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl min-[3840px]:text-4xl min-[4500px]:text-5xl min-[5000px]:text-6xl rounded-full px-1.5 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 font-roslandale">
                                    <span className="text-red-500 ">
                                        <i class="ri-star-fill"></i>
                                    </span>{" "}
                                    5.0
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[3840px]:text-3xl min-[4500px]:text-4xl min-[5000px]:text-5xl opacity-70 font-roslandale">
                                    {Data.Review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Customers;
