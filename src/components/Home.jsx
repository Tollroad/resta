import React from "react";
import TileHome from "./TileHome";
import CardHome from "./CardHome";
import Footer from '../components/Footer'

function Shop() {
  return (
    <>
      <div className="w-full h-fit bg-home">
        <div className="md:w-[900px] w-fit h-full flex flex-col items-start text-left md:justify-center mx-auto ">
          <h1 className=" md:text-5xl md:font-bold text-white md:mb-4 font-bold text-4xl items-start m-4">Serving you</h1>
          <h1 className=" md:text-5xl font-bold text-white mx-4">since 1989</h1>
          <p className="text-white font-medium md:mt-2 md:leading-6 md:text-md m-4">
            Acme Outdoors is an outdoor and adventure <br /> shop located in the
            Boathouse District in <br />
            Oklahoma City.
          </p>
          <button
            className="px-4 py-1 rounded-md text-sm border-[1px] border-slate-200 text-white md:mt-6 hover:bg-white hover:text-black
          hover:duration-300 font-semibold mx-4 "
          >
            Shop merch
          </button>
        </div>
      </div>
      <div className="w-fit h-fit text-[#222]">
        <div className="w-[900px] md:mx-auto md:h-fit flex justify-between flex-wrap ">
          <div className=" h-20 ml-8 mt-8 w-96">
            <p className="pt-2 text-sm">WAYS TO SUPPORT</p>
            <h1 className="text-3xl font-bold">Support Acme Outdoors.</h1>
          </div>
          <div className="w-96 h-fit text-xs m-8">
            <p className="leading-5">
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we’ve listed the best ways to help us through this season.
            </p>
          </div>
          <div className=" w-fit m-8 h-fit flex justify-evenly md:flex-row flex-col">
            <TileHome serial="01" />
            <TileHome serial="02" />
            <TileHome serial="03" />
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-home1 text-[#222]">
        <div className="w-[900px] h-full flex  flex-col items-end text-left justify-center mx-auto">
          <h1 className=" text-4xl font-bold text-white mb-3">
            How we're keeping you{" "}
          </h1>
          <h1 className=" text-4xl font-bold text-white">
            safe during COVID-19
          </h1>
          <p className="text-white text-right font-medium mt-2 leading-6">
            As an outdoor shop, we’ve taken precautionary <br /> measures to
            ensure the safety of all our <br />
            customers and team members.
          </p>
          <button
            className="px-4 py-2 rounded-md text-xs text-black mt-6 bg-white hover:bg-[#eb5757]
          hover:duration-300 font-bold hover:text-white"
          >
            Read Our Statement
          </button>
        </div>
      </div>
      <div className="w-full h-fit text-[#222]">
        <div className="w-[900px] mx-auto h-fit flex justify-between flex-wrap">
          <div className=" h-20 mt-8 w-96">
            <h1>SHOP PRODUCTS</h1>
            <p className="text-4xl font-bold">Open 24/7/365</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-[900px] mx-auto flex flex-row justify-evenly">
          <CardHome/>
          <CardHome/>
          <CardHome/>
        </div>
        <div className="w-full h-fit flex justify-center items-center">
        <button
            className="px-4 py-2 rounded-md bg-black text-xs text-white mt-6  hover:bg-[#eb5757]
          hover:duration-300 font-bold hover:text-white"
          >
            View All Products
          </button>
        </div>
      </div>
      <div className="w-full h-fit mt-6 text-white my-6">
        <div className="w-[900px] h-fit mx-auto flex">
          <div className=" bg-Homelast w-96 h-80 relative my-auto left-9 rounded-l-lg">
          </div>
          <div className=" h-96 w-full rounded-lg bg-[#222] flex flex-col justify-center items-center">
            <h1 className="text-4xl m-2 font-bold">Shop Local.</h1>
            <p className="w-72 text-xs font-medium py-2">We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
            <p className="w-72 text-xs font-medium py-2">That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>
            <p className="w-72 text-xs font-medium py-2">But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>
            <h1 className="text-left">-----</h1>
            <p className="text-xs font-semibold">Jane & John Doe</p>
            <h1 className="font-bold">Acme Outdoors</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Shop;
