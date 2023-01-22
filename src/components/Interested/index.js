const Interested = () => {
  return (
    <div className="mt-32 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-[80%] mx-auto px-6 bg-gradient-to-r from-zinc-800 to-green-900 rounded-md p-8">
        <div className="">
          <div className="text-3xl text-white font-semibold">
            Interested in working with us?
          </div>
          <div className="pt-2 text-zinc-100">Send us a mail</div>
        </div>
        <div className="text-left pt-4  md:text-center  text-white text-3xl">
          <a href="mailto:info@grandelng.com" className="underline">
            info@grandelng.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Interested;
