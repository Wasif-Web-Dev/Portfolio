import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

const Skills = () => {
    // GSAP Refs
    const marqueeRef = useRef(null);
    const projectsRef = useRef(null);
    const customersRef = useRef(null);
    const experienceRef = useRef(null);
    const recognitionRef = useRef(null);

    const countRefs = [projectsRef, customersRef, experienceRef, recognitionRef];
    const finalValues = [60, 21, 13, 14];
    const skills = [
        "Graphic Design",
        "Custom Development",
        "Product Design",
        "Visual Interaction",
        "Webflow Development",
        "Social Media Design",
        "UX Design",
        "UI Design",
    ];
    const marqueeSkills = [...skills, ...skills];

    useGSAP(() => {
        const marqueeDuration = window.innerWidth <= 768 ? 10 : 15;
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: marqueeDuration,
            ease: "none",
            repeat: -1,
        });
        countRefs.forEach((ref, index) => {
            gsap.fromTo(
                ref.current,
                {innerHTML: 0},
                {
                    innerHTML: finalValues[index],
                    duration: 3, // Increased duration for slower animation
                    snap: {innerHTML: 1},
                    scrollTrigger: {
                        trigger: ref.current,
                        start: () => {
                            // Dynamic start position based on viewport width
                            if (window.innerWidth <= 320) return "top 95%";
                            if (window.innerWidth <= 768) return "top 90%";
                            if (window.innerWidth <= 1440) return "top 85%";
                            if (window.innerWidth <= 2560) return "top 80%";
                            if (window.innerWidth <= 3840) return "top 75%";
                            return "top 70%"; // For very large screens
                        },
                        once: true,
                    },
                    ease: "power1.out", // Smoother easing
                }
            );
        });
    });
    return (
        <div className="min-h-[50vh] 2xxl:min-h-[35vh] mt-12 w-[95%] max-w-[2000px] mx-auto">
            {/* Skills Marquee */}
            <div
                className={`h-[8vh] sm:h-[10vh] relative md:h-[12vh] flex border border-white/20 items-center justify-center mx-auto px-2 xs:px-3 sm:px-4 md:px-8 lg:px-16 overflow-hidden w-[98%] sm:w-[95%] md:w-[100%] rounded-full z-[40]`}
            >
                <div className="w-full h-full flex items-center justify-start overflow-hidden relative bg-white/10 rounded-full">
                    <div className="absolute right-0 w-[4%] h-full rounded-lg  z-10 bg-gradient-to-l from-black/90 to-transparent"></div>
                    <div className="absolute left-0 w-[4%] h-full rounded-lg  z-10 bg-gradient-to-r from-black/90 to-transparent"></div>
                    <div ref={marqueeRef} className="flex gap-2 xs:gap-3 md:gap-5 whitespace-nowrap">
                        {marqueeSkills.map((skill, index) => (
                            <div
                                key={index}
                                className=" border border-white/20 h-[3vh] text-white xs:h-[4vh] sm:h-[5vh] w-max rounded-2xl sm:rounded-3xl flex items-center justify-center px-2 xs:px-3 sm:px-4 md:px-6"
                            >
                                <h1 className="text-[10px] xs:text-xs sm:text-sm text-white md:text-base lg:text-lg min-[3840px]:text-2xl min-[4500px]:text-3xl">
                                    {skill}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-5">
                <div
                    className={`flex flex-col gap-1 sm:gap-2 h-[12vh] bg-white/10 sm:h-[14vh] md:h-[16vh] items-center justify-center rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 `}
                >
                    <h1 className="text-lg xs:text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl min-[3840px]:text-6xl min-[4500px]:text-7xl">
                        <span ref={projectsRef}>0</span>
                        <span className="text-[#DD6455]">+</span>
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base text-white md:text-lg lg:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl font-secondary text-center">
                        Completed projects.
                    </p>
                </div>

                <div
                    className={` flex flex-col gap-1 sm:gap-2 h-[12vh] bg-white/10 sm:h-[14vh] md:h-[16vh] items-center justify-center rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 `}
                >
                    <h1 className="text-lg xs:text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl min-[3840px]:text-6xl min-[4500px]:text-7xl">
                        <span ref={customersRef}>0</span>
                        <span className="text-[#DD6455]">+</span>
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base text-white md:text-lg lg:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl font-secondary text-center">
                        Happy Customers
                    </p>
                </div>

                <div
                    className={`flex flex-col gap-1 sm:gap-2  h-[12vh] bg-white/10 sm:h-[14vh] md:h-[16vh] items-center justify-center rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 `}
                >
                    <h1 className="text-lg xs:text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl min-[3840px]:text-6xl min-[4500px]:text-7xl">
                        <span ref={experienceRef}>0</span>
                        <span className="text-[#DD6455]">+</span>
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base text-white md:text-lg lg:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl font-secondary text-center">
                        Years of Experience
                    </p>
                </div>

                <div
                    className={`flex flex-col gap-1 sm:gap-2 h-[12vh] bg-white/10 sm:h-[14vh] md:h-[16vh] items-center justify-center rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 `}
                >
                    <h1 className="text-lg xs:text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl min-[3840px]:text-6xl min-[4500px]:text-7xl">
                        <span ref={recognitionRef}>0</span>
                        <span className="text-[#DD6455]">+</span>
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base text-white md:text-lg lg:text-xl min-[3840px]:text-2xl min-[4500px]:text-3xl font-secondary text-center">
                        Recognition Received
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
