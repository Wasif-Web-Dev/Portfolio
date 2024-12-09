import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border border-white/10 z-50 w-[500px] rounded-xl mt-10 fixed top-0  left-1/2 -translate-x-1/2 bg-[#131316]  mx-auto p-2 flex items-center justify-evenly">
            <div>
                <Link to="/" className="flex items-center gap-1 bg-black text-white px-5 py-3 text-xl rounded-xl ">
                    <span>
                        <i className="ri-home-6-fill"></i>
                    </span>{" "}
                    Home
                </Link>
            </div>
            <div>
                <Link
                    to="/about"
                    className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl "
                >
                    <span>
                        <i class="ri-user-fill"></i>
                    </span>{" "}
                    About
                </Link>
            </div>
            <div>
                <Link
                    to="/works"
                    className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl "
                >
                    <span>
                        <i class="ri-briefcase-fill"></i>
                    </span>{" "}
                    Works
                </Link>
            </div>
            <div>
                <Link
                    to="/contact"
                    className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl "
                >
                    <span>
                        <i class="ri-flashlight-fill"></i>
                    </span>{" "}
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
