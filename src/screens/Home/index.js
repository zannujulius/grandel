import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Carousel } from "react-responsive-carousel";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineAnalytics } from "react-icons/md";
import Interested from "../../components/Interested";
import { Link } from "react-router-dom";
import { homeData } from "./data";
import { Bg } from "../../assets/svg";
const Home = () => {
  const Slider = () => {
    return (
      <Carousel
        swipeable={true}
        transitionTime={2}
        showArrows={false}
        showIndicators={true}
        className="w-[90%] sm:[w-60%] lg:w-[50%] mx-auto md:[w-40%]"
      >
        {Array.from(Array(4)).map((i, index) => (
          <div className="flex align-center" key={index}>
            <div className="w-[100px] h-[100px] rounded-full border-1 border-teal-800 bg-teal-700 hidden"></div>
            <div className="">
              <div className="text-left text-xl font-semibold leading-[40px] text-zinc-600">
                <span className="font-semibold text-4xl">“</span>ustry. Lorem
                Ipsum has been the industry Lorem Ipsum is simply dummy text of
                the printing and typesetting ind's{" "}
                <span className="font-semibold text-4xl">”</span>
              </div>
              <div className="flex pt-2">
                {Array.from(Array(3)).map((i, index) => (
                  <div className="px-1 " key={index}>
                    <BsStarFill color={"yellow"} size={20} />
                  </div>
                ))}
                <BsStarHalf color={"yellow"} size={20} />
              </div>
              <div className="flex align-center pt-4">
                <div className="font-semibold text-zinc-700">
                  David Ghetta -
                </div>
                <div className="text-zinc-500">Branch Manager</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };
  return (
    <Layout className="">
      {/* hero */}
      <div className="pt-[150px] lg:pt-[200px] lg:h-[80vh] relative overflow-hidden">
        <Bg className="absolute lg:top-[-300px] right-[-100px] rotate-45 top-[-500px] " />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap:20 lg:w-[80%] mx-auto px-6 ">
          <div className="">
            <div className="text-5xl leading-[60px] text-left md:text-center lg:text-left text-zinc-800 font-semibold">
              Make best financial investment with us at{" "}
              <span className="text-green-300 font-semibold">Grandel</span>
            </div>
            <div className="font-semibold text-zinc-400 pt-8 text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>

            <div className="pt-10">
              <Link
                to="/service"
                className="bg-green-400 text-white px-8 py-4 rounded-[50px] w-[fit-content]"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="h-[400px] bg-white drop-shadow-sm border rounded-lg border-teal-500 overflow-hidden">
              <img
                src={
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className="mt-32 relative overflow-hidden">
        <Bg className="absolute top-[0px] left-[-800px]  lg:left-[-500px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6">
          <div className="mt-10 lg:mt-0">
            <div className="h-[500px] bg-white drop-shadow-sm border rounded-lg border-zinc-200 overflow-hidden">
              <img
                src={
                  "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-4xl text-zinc-800 text-left md:text-center lg:text-left">
              We are a team of{" "}
              <span className="text-green-400">Data & Financial expert</span>
            </h1>
            <div className="pt-4 text-zinc-600 text-left md:text-center lg:text-left ">
              At Grandel Investment and Tech, we create sustained value added
              for our clients: We carefully observe the financial markets and
              interprete global macroeconomic developments.
            </div>
            <div className="pt-4 text-zinc-600 text-left md:text-center lg:text-left">
              At GIT, our relationship with our clients and business partners is
              built on performance and trust. We also help our clients to make
              the best data driven business to ensure growth and profitability.
              You can count on us today for a better future
            </div>
            <div className="pt-10">
              <div
                className="bg-green-400 text-white px-8 py-4 rounded-[50px] w-[fit-content] "
                onClick={() => {
                  window.screenTop(100);
                }}
              >
                Reach out to us
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="mt-32">
        <div className="text-center text-3xl text-zinc-900 pb-4 font-semibold">
          What we offer
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:gap-10 lg:w-[80%] mx-auto px-6">
          {homeData.map((i, index) => (
            <div key={i.id} className="my-8 py-6 bg-white px-2">
              <div className="flex align-center justify-center">
                <div className="w-[70px] h-[70px] rounded-tl-[40px] rounded-br-[20px] flex align-center justify-center bg-green-400 pt-5">
                  <div className="">{i.tag}</div>
                </div>
              </div>
              <div className="text-zinc-800 text-[20px] cursor-pointer pt-4 text-center hover:text-green-600 transition-all ease font-semibold">
                {i.title}
              </div>
              <div className="pt-2 text-left md:text-center lg:text-left text-zinc-600 ">
                {i.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 mb-10">
        <div className="flex align-center justify-center ">
          <Slider />
        </div>
      </div>
      <hr className="border-1 border-green-400 lg:w-[80%] mx-auto" />
      {/* Working  */}
      <Interested />
    </Layout>
  );
};

export default Home;
