import React, {useContext} from "react";
import Blinking from "../../public/Blinking.svg";
import {Link} from "react-router-dom";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {useEffect, useState} from "react";
// import FAQ from "../partials/FAQ";
import ProfilePic from "../../public/images/Profile-pic-removebg.png";
// import {AppContext} from "../context/AppContext";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    document.title = "Get in Touch - Marko Vucic";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Reduce duration
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 0.8,
            lerp: 0.02, // Faster response
        });

        // lenis.scrollTo(0, 0, {immediate: true});
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        try {
            // Add loading state
            const submitButton = e.target.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            // Sending POST request to the contact API
            const response = await fetch("https://apimarkovucic.vercel.app/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                // Add timeout
                timeout: 10000,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Handle the response if the request is successful
            const data = await response.json();

            // Clear form on success
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            toast.success("Message sent successfully!");
        } catch (error) {
            // Handle specific error cases
            console.error("Error details:", error);

            if (error.name === "AbortError") {
                toast.error("Request timed out. Please try again.");
            } else if (error.message.includes("Failed to fetch")) {
                toast.error("Network error. Please check your connection and try again.");
            } else {
                toast.error("Error sending message: " + error.message);
            }
        } finally {
            // Reset button state
            const submitButton = e.target.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen min-[2600px]:min-h-[40vh] min-[3000px]:min-h-[30vh] min-[4000px]:min-h-[20vh] min-[5000px]:min-h-[10vh] w-full  px-2 sm:px-4 md:px-8 max-w-screen-xl mx-auto pt-[20vh]">
            <ToastContainer position="top-center" />
            <div className="min-h-[40vh] 2xxl:min-h-[20vh] w-full flex flex-col justify-start items-center">
                {/* Contact top */}
                <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center text-center py-4 sm:py-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roslindale">
                        I'd Love to hear from you.
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg px-2 sm:px-4 font-secondary max-w-2xl">
                        Ready to connect and collaborate, drop me a line and let's turn ideas into reality!
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full mt-4 sm:mt-6">
                    {/* Profile left */}
                    <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[45%]">
                        <div
                            className={`rounded-xl  bg-white/10  h-[42vh] sm:h-[35vh] lg:h-[38vh] xxl:max-h-[24vh] 2xxl:max-h-[20vh] min-[2600px]:max-h-[12vh] min-[3000px]:max-h-[10vh] flex flex-col $ justify-between py-2 sm:py-3`}
                        >
                            <div className="h-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-start p-2 sm:p-3 w-[95%] mx-auto">
                                <img
                                    className={`w-24 bg-white/10 h-24 sm:w-32 sm:h-32 object-cover pr-2  border border-current rounded`}
                                    src={ProfilePic}
                                    alt="Marko Vucic"
                                />
                                <div className="flex flex-col gap-2 text-center items-start max-md:items-center max-md:gap-2 sm:text-left">
                                    <h1
                                        className={`text-xs sm:text-sm border rounded-full shadow-xl px-2 py-1 opacity-75 border-current flex items-center justify-center sm:justify-start gap-2 font-secondary`}
                                    >
                                        <span>
                                            <img
                                                className="h-2 w-2 sm:h-3 sm:w-3 animate-pulse"
                                                src={Blinking}
                                                alt=""
                                            />
                                        </span>
                                        Available to work
                                    </h1>
                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-roslindale">Marko Vucic</h1>
                                    <h1 className="text-sm sm:text-base opacity-50 font-secondary">Videographer</h1>
                                </div>
                            </div>
                            <div
                                className={`flex flex-col bg-white/10 sm:flex-row justify-between items-center shadow-xl p-2 sm:p-3 w-[90%] mx-auto border-current rounded`}
                            >
                                <h1 className="text-sm sm:text-base opacity-60 font-secondary">Working Hours (IST)</h1>
                                <h2 className="text-sm sm:text-base opacity-60 font-secondary">8AM to 6PM </h2>
                            </div>
                        </div>
                        {/* social Links */}
                        <a
                            href="https://www.instagram.com/vucic.visuals/"
                            target="_blank"
                            className={`max-h-[10vh] bg-white/10 flex justify-between items-center $ p-2 sm:p-3 rounded-xl group`}
                        >
                            <Link className="flex gap-2 sm:gap-3 items-center">
                                <img
                                    className={`p-2 sm:p-3 rounded-xl mix-blend-difference bg-cards/50`}
                                    src="https://framerusercontent.com/images/JTpjZGNfWiGrAfyvl1MGLC6Mk.svg"
                                    alt=""
                                />
                                <div>
                                    <h3 className="text-sm sm:text-base opacity-60 font-secondary">Instagram</h3>
                                    <h2 className="text-sm sm:text-base font-secondary">50 + Followers</h2>
                                </div>
                            </Link>
                            <div className="group-hover:rotate-[-45deg] transition-all duration-300">
                                <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/markovucic/"
                            target="_blank"
                            className={`max-h-[10vh] bg-white/10 flex justify-between items-center p-2 sm:p-3 $ rounded-xl group`}
                        >
                            <div className="flex gap-2 sm:gap-3 items-center">
                                <img
                                    className={`p-2 sm:p-3 rounded-xl mix-blend-difference bg-cards/50`}
                                    src="https://framerusercontent.com/images/OG6uWRwgqMiEnNaFAm9SO03F0.svg"
                                    alt=""
                                />
                                <div>
                                    <h3 className="text-sm sm:text-base opacity-60 font-secondary">Linkedin</h3>
                                    <h2 className="text-sm sm:text-base font-secondary">500 + Followers</h2>
                                </div>
                            </div>
                            <div className="group-hover:rotate-[-45deg] transition-all duration-300">
                                <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
                            </div>
                        </a>
                        <Link
                            className={`max-h-[10vh] bg-white/10 flex justify-between items-center p-2 sm:p-3 $ rounded-xl group`}
                        >
                            <div className="flex gap-2 sm:gap-3 items-center">
                                <img
                                    className={`p-2 sm:p-3 rounded-xl mix-blend-difference bg-cards/50`}
                                    src="https://framerusercontent.com/images/DIDy5N5Wu9sf3OKHE5PPJ0r5WJo.svg"
                                    alt=""
                                />
                                <div>
                                    <h3 className="text-sm sm:text-base opacity-60 font-secondary">Twitter</h3>
                                    <h2 className="text-sm sm:text-base font-secondary">5K + Followers</h2>
                                </div>
                            </div>
                            <div className="group-hover:rotate-[-45deg] transition-all duration-300">
                                <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
                            </div>
                        </Link>
                    </div>
                    {/* Message right */}
                    <div
                        className={`w-full lg:w-[55%] bg-white/10 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center`}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-roslindale text-center">
                            I'm Here for Your Questions
                        </h1>
                        <div className="w-full">
                            <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
                                <div className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="rounded-lg p-2 sm:p-3 text-black focus:outline-none focus:ring-2 focus:ring-sky-500 font-secondary text-sm sm:text-base"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="rounded-lg p-2 sm:p-3 text-black focus:outline-none focus:ring-2 focus:ring-sky-500 font-secondary text-sm sm:text-base"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="rounded-lg p-2 sm:p-3 text-black h-20 sm:h-24 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500 font-secondary text-sm sm:text-base"
                                        placeholder="Message here..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`border-2 bg-white/10 border-current transition-colors duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-secondary `}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd section Cards */}
            <div className="min-h-[50vh] 2xxl:min-h-[20vh] mt-8 sm:mt-12 rounded-xl w-full py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 max-w-[5000px] mx-auto">
                <div
                    className={`flex shadow-xl bg-white/10 justify-between items-center flex-col h-auto lg:h-[45vh] xxl:h-[30vh] 2xxl:h-[25vh] min-[2600px]:h-[20vh] min-[3000px]:h-[15vh] w-full lg:w-[32%] overflow-hidden rounded-3xl`}
                >
                    <div className="h-[40%] w-full p-3 sm:p-4 flex items-center justify-center">
                        <img
                            src="https://framerusercontent.com/images/JVLU0DvnX8vZWKTCUGfVtssEmSg.svg"
                            alt=""
                            className="w-16 sm:w-20"
                        />
                    </div>
                    <div className="h-[60%] w-full flex items-center flex-col justify-center gap-2 sm:gap-4 p-2 sm:p-4 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-roslindale">You can Email Me Here</h1>
                        <h2 className="text-sm sm:text-base opacity-60 font-secondary">info@markovucic.ch</h2>
                        <a
                            href="mailto:info@markovucic.ch"
                            className={`border-current bg-white/10 transition-colors duration-300 shadow-xl py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-secondary `}
                        >
                            Email Now
                        </a>
                    </div>
                </div>
                <div
                    className={`flex shadow-xl bg-white/10 justify-between items-center flex-col h-auto lg:h-[45vh] xxl:h-[30vh] 2xxl:h-[25vh] min-[2600px]:h-[20vh] min-[3000px]:h-[15vh] w-full lg:w-[32%] overflow-hidden rounded-3xl`}
                >
                    <div className="h-[40%] w-full p-3 sm:p-4 flex items-center justify-center">
                        <img
                            src="https://framerusercontent.com/images/hsenZ7t7SjLWF3wKdVYAzdj7to.svg"
                            alt=""
                            className="w-16 sm:w-20"
                        />
                    </div>
                    <div className="h-[60%] w-full flex items-center flex-col justify-center gap-2 sm:gap-4 p-2 sm:p-4 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-roslindale">Book a Call </h1>
                        <h2 className="text-sm sm:text-base opacity-60 font-secondary">Available only on Mon - Fri</h2>
                        <a
                            href="mailto:info@markovucic.ch"
                            target="_blank"
                            className={`border-current bg-white/10 transition-colors duration-300 shadow-xl py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-secondary `}
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
                <div
                    className={`flex justify-between bg-white/10 items-center flex-col shadow-xl h-auto lg:h-[45vh] xxl:h-[30vh] 2xxl:h-[25vh] min-[2600px]:h-[20vh] min-[3000px]:h-[15vh] w-full lg:w-[32%] overflow-hidden rounded-3xl`}
                >
                    <div className="h-[40%] w-full p-3 sm:p-4 flex items-center justify-center">
                        <img
                            src="https://framerusercontent.com/images/3WE4fL4k0z7aSfpNBZREKkV0Vhs.svg"
                            alt=""
                            className="w-16 sm:w-20"
                        />
                    </div>
                    <div className="h-[60%] w-full flex items-center flex-col justify-center gap-2 sm:gap-4 p-2 sm:p-4 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-roslindale">Location</h1>
                        <h2 className="text-sm sm:text-base opacity-60 font-secondary">Somewhere Living Peacefully</h2>
                        <button
                            className={`border-current bg-white/10 transition-colors duration-300 shadow-xl py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-secondary`}
                        >
                            Get Direction
                        </button>
                    </div>
                </div>
            </div>
            {/* 3rd section FAQ */}
            {/* <FAQ /> */}
        </div>
    );
};

export default Contact;
