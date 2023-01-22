import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Layout from "../../components/Layout";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { serviceData } from "./data";
import Interested from "../../components/Interested";
const Service = () => {
  const element = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);
  useEffect(() => {
    const options = {
      strings: [
        "Reporting tools Implementation.",
        "Analytical Maturity Assessment.",
        "Data Dashboards & Visualisations.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(element.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <Layout>
      <div className=" lg:w-[80%] pt-[130px]  mx-auto px-6 lg:pt-[150px]">
        <div className="text-5xl text-zinc-700 pb-2">Services</div>
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
          <Link to={"/service"} className="flex align-center ">
            <div className="text-zinc-400 pt-1">
              <MdOutlineKeyboardArrowRight color={"text-zinc-400"} />
            </div>
            <div className="text-zinc-400 pl-2 transition-all ease-in duration-75 hover:text-green-400">
              Services
            </div>
          </Link>
        </div>
      </div>
      <div className="pt-10 px-6">
        <div className="text-left md:text-center lg:text-center text-3xl text-zinc-700 font-semibold">
          We offer{" "}
          <span className="text-green-400 uppercase"> data solutions</span>
        </div>
        <div className="text-center text-3xl font-semibold text-zinc-700 pt-2">
          In
        </div>
        <div className="h-[150px] pt-6 flex align-center justify-center ">
          <div
            className="text-5xl font-bold text-zinc-400 text-left md:text-center lg:text-center"
            ref={element}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 mt-10">
        <div className="">
          <div className="text-4xl font-semibold text-zinc-700 ">
            Make data-driven decisions for better commercial outcomes
          </div>
          <div className="pt-3">
            <div className="">
              The right BI solution will convert your data into well-structured,
              analysable insights. In other words, real business intelligence
              that will inform your strategic decision-making and support
              commercial outcomes.
            </div>
            <div className="">
              Think of BI & Analytics as a way to access to all your business
              data in a single unified place. An easily accessible data
              visualisation solution or data dashboard makes valuable
              information available to everyone, while providing valuable
              insights that are easy to spot and action. Gain a holistic view of
              your business, your customers and their interactions. And base
              business decisions on facts rather than assumptions. The right BI
              solution will convert your data into well-structured, analysable
              insights. In other words, real business intelligence that will
              inform your strategic decision-making and support commercial
              outcomes.
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 mt-10 justify-items-center"
        id="service"
      >
        {serviceData.map((i) => (
          <div className="" key={i.id}>
            <div className="text-green-400 text-lg text-left">{i.tag}</div>
            <div className="text-zinc-700 text-2xl font-semibold">
              {i.title}
            </div>
            <div className="">{i.content}</div>
          </div>
        ))}
      </div>

      <Interested />
    </Layout>
  );
};

export default Service;
