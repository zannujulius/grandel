import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-8 py-6 lg:p-16 ">
      <div className="w-90% lg:w-[85%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20">
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="font-bold text-zinc-700 text-lg">Contact Us</div>
            </div>
            <div className="font-semibold  text-green-500 text-lg pt-2">
              (+12343455)
            </div>
            <div className="font-normal text-zinc-700 py-2">
              Address of your company in germany. POB 102. Mark Street <br />
              <a href="mailto=grandel@gmail.com">grandel@gmail.com</a>
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
              to="/services"
              className="py-2 cursor-pointer pr-8 flex align-center pr mt-1 font-normal text-md text-zinc-600"
            >
              Services
            </Link>
          </div>
          <div className="">
            <div className="font-bold text-zinc-700 text-lg">Quick Links</div>
            <div>
              <Link
                to="/"
                className="py-1 cursor-pointer pr-8  pr mt-2 block font-light text-lg text-zinc-700"
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className=" py-1 cursor-pointer pr-8  pr mt-2 block font-light text-lg text-zinc-700"
              >
                Solutions
              </Link>
              <Link
                to="/about"
                className=" py-1 hidden cursor-pointer pr-8  pr mt-2  font-light text-lg text-zinc-700"
              >
                About
              </Link>
              <Link className=" hidden py-1 cursor-pointer pr-8  pr mt-2  font-light text-lg text-zinc-700">
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
              Lorem ipsum <br />
              <a href="mailto=grandel@gmail.com">grandel@gmail.com</a>
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
