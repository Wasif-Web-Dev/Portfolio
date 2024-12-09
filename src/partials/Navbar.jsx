import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border-2 w-[500px] rounded-xl mt-10 fixed top-0 left-1/2 -translate-x-1/2 bg-[#131316]  mx-auto p-2 flex items-center justify-evenly">
            <div>
                <Link className="flex items-center gap-1 bg-black text-white px-5 py-3 text-xl rounded-xl " to="/">
                    <span>
                        <i className="ri-home-6-fill"></i>
                    </span>{" "}
                    Home
                </Link>
            </div>
            <div>
                <Link className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl " to="/">
                    <span>
                        <i class="ri-user-fill"></i>
                    </span>{" "}
                    About
                </Link>
            </div>
            <div>
                <Link className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl " to="/">
                    <span>
                        <i class="ri-briefcase-fill"></i>
                    </span>{" "}
                    Works
                </Link>
            </div>
            <div>
                <Link className="flex items-center gap-1 opacity-50 text-white px-5 py-3 text-xl rounded-xl " to="/">
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
