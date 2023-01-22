import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Layout from "../../components/Layout";

const Service = () => {
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
      <div className="">
        <div className="">We offer data solutions</div>
        <div className=""></div>
      </div>
    </Layout>
  );
};

export default Service;
