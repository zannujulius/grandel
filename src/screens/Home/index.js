import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Carousel } from "react-responsive-carousel";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineAnalytics } from "react-icons/md";
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
                <span className="font-semibold text-4xl">“</span> Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's{" "}
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
      <div className="pt-[100px] lg:pt-[200px] lg:h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap:20 lg:w-[80%] mx-auto px-6">
          <div className="">
            <div className="text-5xl leading-[60px] text-left md:text-center lg:text-left text-zinc-800 font-semibold">
              Make best financial investment with us at{" "}
              <span className="text-green-300 font-semibold">Grandel</span>
            </div>
            <div className="font-semibold text-zinc-400 pt-8 text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>

            <div className="pt-10">
              <div className="bg-green-400 text-white px-8 py-4 rounded-[50px] w-[fit-content]">
                Schedule a demo
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="h-[400px] bg-white drop-shadow-sm border rounded-lg border-teal-500"></div>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6">
          <div className="mt-10 lg:mt-0">
            <div className="h-[500px] bg-white drop-shadow-sm border rounded-lg border-teal-500"></div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-4xl text-zinc-800 text-left md:text-center lg:text-left">
              We're a Agency Team & Digital Marketing
            </h1>
            <div className="pt-4 text-zinc-600 text-left md:text-center lg:text-left ">
              Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna.
            </div>
            <div className="pt-4 text-zinc-600 text-left md:text-center lg:text-left">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet
              ipsumlor eut consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt labore et dolore magna liquyam erat.
            </div>
            <div className="pt-10">
              <div className="bg-green-400 text-white px-8 py-4 rounded-[50px] w-[fit-content] ">
                Reach out to us
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:w-[80%] mx-auto px-6">
          {Array.from(Array(3)).map((i, index) => (
            <div key={index} className="my-8 py-6 shadow-sm bg-white px-2">
              <div className="flex align-center justify-center">
                <div className="w-[70px] h-[70px] rounded-tl-[40px] rounded-br-[20px] flex align-center justify-center bg-green-400 pt-4">
                  <div className="">
                    <MdOutlineAnalytics
                      color="white"
                      fill="white"
                      stroke="white"
                      size={35}
                    />
                  </div>
                </div>
              </div>
              <div className="text-zinc-800 text-[20px] cursor-pointer pt-4 text-center hover:text-green-600 transition-all ease font-semibold">
                Business Development
              </div>
              <div className="pt-2 text-center md:text-center lg:text-center text-zinc-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
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
      <div className="mt-32 px-6">
        <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 bg-gradient-to-r from-zinc-800 to-green-900 rounded-md p-8">
          <div className="">
            <div className="text-3xl text-white font-semibold">
              Interested in working with us?
            </div>
            <div className="pt-2 text-zinc-100">
              Hit the button below or give us a call!
            </div>
          </div>
          <div className="text-left pt-4  md:text-center  text-white text-4xl">
            +(245)235234252
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
