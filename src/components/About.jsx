import React from "react";
import About_card from "./About_card";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="w-full h-fit bg-aboutmain">
        <div className="w-[900px] h-full flex  flex-col items-start text-left justify-center mx-auto">
          <h1 className=" text-5xl font-bold text-white mb-4">
            Your Adventure
          </h1>
          <h1 className=" text-5xl font-bold text-white">Awaits</h1>
          <p className="text-white mt-2 leading-6">
            Acme Outdoors has everything you need to help <br /> you get started
            today. Check out our wonderful <br /> collection of gear that will
            make your next <br /> adventure complete.
          </p>
          <button
            className="px-4 py-1 rounded-md text-sm border-[1px] border-slate-200 text-white mt-6 hover:bg-white hover:text-black
          hover:duration-300 font-semibold "
          >
            Shop merch
          </button>
        </div>
      </div>
      <div className="w-full h-fit text-[#222]">
        <div className="w-[900px] mx-auto h-fit flex justify-between flex-col items-center">
          <div className=" h-20 ml-8 mt-8 w-fit ">
            <p className="py-2 text-xs text-center">WHY ACME OUTDOORS?</p>
            <h1 className="text-3xl font-bold w-fit text-center">
              We’re the best in the business.
            </h1>
          </div>
          <div className="w-fit h-fit text-xs text-center">
            <p className="leading-5">
              From more than 30 years, we’ve been leading the way across
              Oklahoma — creating the best possible customer experience since
              1989.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit my-6 text-[#222]">
        <div className="w-[900px] h-fit flex mx-auto ">
          <About_card />
          <About_card />
          <About_card />
          <About_card />
        </div>
      </div>
      <div className="w-full h-fit mt-24 text-white">
        <div className="w-[900px] h-fit mx-auto flex">
          <div className=" bg-Aboutlogo w-96 h-80 relative my-auto left-9 rounded-l-lg"></div>
          <div className=" h-96 w-full rounded-lg bg-[#222] flex flex-col justify-center items-center">
            <h1 className="text-4xl m-2 font-bold">Meet the Owners.</h1>
            <p className="w-72 text-xs font-medium py-2">
              We know that during COVID-19, a lot of folks around the city and
              state are feeling uneasy about the future - we’re not sure what
              the future holds either.
            </p>
            <p className="w-72 text-xs font-medium py-2">
              That said: we know that we love making sure you have the gear you
              need for your adventures, and we’re going to keep doing that -
              with our team - until the city tells us we can’t.
            </p>
            <p className="w-72 text-xs font-medium py-2">
              But as long as folks like yourself support small businesses around
              the city, then we’ll be here — every day, making sure your orders
              arrive on time.
            </p>
            <h1 className="text-left">-----</h1>
            <p className="text-xs font-semibold">Jane & John Doe</p>
            <h1 className="font-bold">Acme Outdoors</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-AboutEnd mt-6">
        <div className="w-[900px] h-full flex  flex-col items-start text-left justify-center mx-auto">
          <h1 className=" text-5xl font-bold text-white mb-4">Serving you</h1>
          <h1 className=" text-5xl font-bold text-white">since 1989</h1>
          <p className="text-white font-medium mt-2 leading-6">
            Acme Outdoors is an outdoor and adventure <br /> shop located in the
            Boathouse District in <br />
            Oklahoma City.
          </p>
          <button
            className="px-4 py-1 rounded-md text-sm border-[1px] border-slate-200 text-white mt-6 hover:bg-white hover:text-black
          hover:duration-300 font-semibold "
          >
            Shop merch
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
