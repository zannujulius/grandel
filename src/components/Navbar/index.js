import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
// import Logo from "../../assets/images/logo.jpg";
const Navbar = () => {
  let location = useLocation();
  const [showNav, setshowNav] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setshowNav(true);
    });
    return () => {};
  }, []);

  return (
    // <div
    //   className={
    //     showNav || location.pathname == "/about"
    //       ? "w-full px-3 py-4 fixed navbar z-50 bg-white drop-shadow-md"
    //       : `w-full px-3 py-4 fixed navbar z-50`
    //   }
    // >
    <div className={"w-full px-3 py-6 fixed navbar z-50 bg-white"}>
      {modal && <Modal closeModal={setmodal} />}
      <div className="w-[95%] mx-auto flex flex-row items-center justify-between">
        <Link to="/" className="flex flex-row items-center justify-start">
          <div className="w-[30px] hidden h-[30px] rounded-full overflow-hidden  items-center justify-center">
            {/* <img src={Logo} alt={"image"} className="" /> */}
          </div>
          <div className="brand text-2xl font-bold mx-2 text-zinc-700 lg:hidden ">
            GIT<span className="text-green-600 ">.</span>
            {/* Grandel<span className="text-green-600 ">.</span> */}
          </div>

          <div className="brand text-2xl font-bold mx-2 text-zinc-700 hidden sm:hidden md:b lg:block ">
            Grandel Investment And Tech
            <span className="text-green-600 ">.</span>
            {/* Grandel<span className="text-green-600 ">.</span> */}
          </div>
        </Link>
        <div className="flex flex-row items-center ">
          <div className="hidden md:flex items-center">
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/service"
            >
              Service
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hidden cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/"
            >
              Contact Us
            </Link>
            <div className="px-8 font-light text-white py-3 rounded-[30px] drop-shadow-sm bg-green-500 cursor-pointer">
              Get started
            </div>
          </div>
          <div className="lg:hidden md:hidden" onClick={() => setmodal(true)}>
            <AiOutlineMenu size={30} color={""} />
          </div>
          <div className="flex-row items-center hidden">
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              EN
            </div>
            <div className="text-zinc-800 font-extralight text-1xl px-1">|</div>
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              GR 🇩🇪
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
