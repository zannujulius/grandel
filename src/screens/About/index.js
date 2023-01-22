import Layout from "../../components/Layout";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
const AboutUs = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
    return () => {};
  }, []);

  const [tabstate, settabstate] = useState(1);
  return (
    <Layout>
      <div className=" lg:w-[80%] pt-[130px]  mx-auto px-6 lg:pt-[150px]">
        <div className="text-5xl text-zinc-700 pb-2">About</div>
        <div className="flex pt-2">
          <Link to="/" className="flex align-center ">
            <div className="flex align-center justify-center pt-1">
              <IoHome
                color={"#262626"}
                className="transition-colors ease-in duration-75 hover:text-green-400"
              />
            </div>
            <div className="text-zinc-700 pl-2 pr-1 transition-all ease-in duration-75 hover:text-green-400">
              Home
            </div>
          </Link>
          <Link to={"/about"} className="flex align-center ">
            <div className="text-zinc-400 pt-1">
              <MdOutlineKeyboardArrowRight color={"text-zinc-400"} />
            </div>
            <div className="text-zinc-400 pl-2 transition-all ease-in duration-75 hover:text-green-400">
              About
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 mt-10">
        <div className="h-[620px] bg-white border-4 border-zinc-200 drop-shadow-md rounded-lg overflow-hidden  animate__animated animate__fadeInLeft">
          <img
            src={
              "https://images.unsplash.com/photo-1580411402629-e0cdf76f3d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            }
            className="w-full h-full object-center"
            loading="lazy"
            alt="ceo img"
          />
        </div>
        <div className="pt-20 animate__animated animate__fadeInRight">
          <div className="text-5xl text-zinc-700 font-semibold">
            At <span className="text-green-400">Grandel.</span>
          </div>
          <div className="flex pt-6">
            <div
              className="pr-4 py-2 mx-2 cursor-pointer text-2xl font-normal"
              style={{
                color: tabstate == 1 ? "#262626" : "#ddd",
              }}
              onClick={() => settabstate(1)}
            >
              Mission
            </div>
            <div
              className="px-4 py-2 mx-2  cursor-pointer text-2xl font-normal"
              style={{
                color: tabstate == 2 ? "#262626" : "#ddd",
              }}
              onClick={() => settabstate(2)}
            >
              Vision
            </div>
          </div>
          <hr className="border-1 border-zinc-400 w-100" />
          {tabstate == 1 && (
            <div className="text-zinc-600 font-normal pt-4 leading-[30px]">
              Mission Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          )}
          {tabstate == 2 && (
            <div className="text-zinc-600 font-normal pt-4 leading-[30px]">
              Vission Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap:20 lg:w-[80%] mx-auto px-6 mt-16 lg:mt-24">
        <div className="lg:pt-20">
          <div className="text-3xl text-zinc-700 font-semibold">
            Why choose Grandel
          </div>
          <div className="text-zinc-400 pt-2 text-2xl ">
            We’re Your Partner in Your Success
          </div>
          <div className="pt-4">
            {Array.from(Array(5)).map((i, index) => (
              <div className="flex py-2" key={index}>
                <div className="pt-1">
                  <BsCheck color="lawngreen" />
                </div>
                <div className="text-zinc-700 pl-2 ">
                  Distinctive Experts That Provide Effortless Expertise
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[400px] mt-10 lg:pt-0 bg-white border-4 border-zinc-200 drop-shadow-md rounded-lg overflow-hidden  animate__animated animate__fadeInLeft">
          <img
            src={
              "https://media.istockphoto.com/id/1395461893/photo/hand-growth-improvement-arrow-up-success-business-profit-background-of-goal-forward.jpg?s=612x612&w=0&k=20&c=KVF_yIbPM4d4dYdga6U9S1P0PhHtfpwddwNPuFu4nao="
            }
            className="w-full h-full object-cover"
            loading="lazy"
            alt="ceo img"
          />
        </div>
      </div>
      <div className="mt-32 px-6">
        <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 bg-gradient-to-r from-zinc-800 to-green-900 rounded-md p-8">
          <div className="">
            <div className="text-3xl text-white font-semibold">
              Interested in working with us?
            </div>
            <div className="pt-2 text-zinc-100">Send us a mail</div>
          </div>
          <div className="text-left pt-4  md:text-center  text-white text-4xl">
            <a href="mailto:info@grandelng.com">info@grandelng.com</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
