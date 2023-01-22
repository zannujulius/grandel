import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-8 py-6 lg:p-16 mt-16">
      <div className="w-90% lg:w-[85%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="font-bold text-zinc-700 text-lg">Contact Us</div>
            </div>
            <a
              href="tel:+2348033962100"
              className="d-block font-semibold text-1xl text-green-400"
            >
              +(234)8033962100
            </a>
            <div className="font-normal text-zinc-700 py-2">
              Grandel Investment and Tech Ltd 21/25 Investment House, Broad
              Street, Lagos Island. <br />
              <a href="mailto:info@grandelng.com" className="d-block">
                info@grandelng.com
              </a>
              <br />
            </div>
            <div className="text-zinc-700 pt-2">Mon - Fri 8:00 - 17:00</div>
          </div>

          <div className="">
            <div className="font-bold text-zinc-700 text-lg">Quick Links</div>
            <Link
              to="/"
              className="py-2 cursor-pointer pr-8 flex align-center pr mt-1 font-normal text-md text-zinc-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 cursor-pointer pr-8 flex align-center pr mt-1 font-normal text-md text-zinc-600"
            >
              About
            </Link>
            <Link
              to="/service"
              className="py-2 cursor-pointer pr-8 flex align-center pr mt-1 font-normal text-md text-zinc-600"
            >
              Services
            </Link>
          </div>
          <div className="">
            <div className="font-bold text-zinc-700 text-lg">Serivces</div>
            <div>
              <a
                href="/service#service"
                className="py-1 cursor-pointer pr-8  pr mt-2 block font-normal text-lg text-zinc-600"
              >
                Data Visualization
              </a>
              <a
                href="/service#service"
                className="py-1 cursor-pointer pr-8  pr mt-2 block font-normal text-lg text-zinc-600"
              >
                Reporting tools Implementation
              </a>
              <a
                href="/service#service"
                className="py-1 cursor-pointer pr-8  pr mt-2 block font-normal text-lg text-zinc-600"
              >
                Analytical Maturity Assessment
              </a>
              <Link className=" hidden py-1 cursor-pointer pr-8  pr mt-2  font-normal text-lg text-zinc-600">
                Contact Us
              </Link>
            </div>
            <div className="hidden">
              <div className="font-bold text-zinc-700 text-md pt-2">
                Contact Us
              </div>
              <div>
                <div className=" flex flex-row py-1 cursor-pointer pr-8  pr mt-2  font-light text-lg text-zinc-700">
                  <AiFillPhone size={20} />
                  <div> +2340919484903</div>
                </div>
                <div className="flex flex-row py-1 cursor-pointer pr-8  pr mt-2  font-light text-lg text-zinc-700">
                  <AiFillMail size={20} />
                  <div className="ml-2">enquiry@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="font-bold text-zinc-700 text-lg">About Us</div>
            </div>

            <div className="font-normal text-zinc-700 py-2">
              <a href="mailto:info@grandelng.com">info@grandelng.com</a>
            </div>
            <div className="text-zinc-700 pt-2">Mon - Fri 8:00 - 17:00</div>
          </div>
        </div>
        <div className="h-[2px] rounded-lg w-full bg-zinc-300 mt-2 hidden"></div>
        <div className="text-sm text-zinc-700 font-light text-center pt-4 hidden">
          Copyright 2022{" "}
          <span className="font-bold text-zinc-700">
            Greencrystal Engineering
          </span>{" "}
          Ltd. Alright reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
