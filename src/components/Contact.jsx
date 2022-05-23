import React from "react";
import logo from "../images/Chat.svg";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <div className="w-full h-fit bg-contact">
        <div className="w-[900px] h-full flex flex-col  items-start text-left justify-center mx-auto">
          <h1 className=" text-4xl font-bold text-[#eb5757] mb-4">
            Contact Acme Outdoors
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col w-56 mx-2 h-64 bg-white rounded-md justify-center items-center">
              <img src={logo} alt="" className="w-10 h-10 mb-6" />
              <h1 className="text-2xl font-medium">Contact Us</h1>
              <p className="text-center text-xs px-4 py-2">
                Just want to say hi? We'd love to hear from you. We love our
                customers and community!
              </p>
              <button className="bg-[#eb5757] px-4 py-2 text-xs rounded-md hover:bg-black hover:duration-300 text-white font-semibold">
                Send Us A Message
              </button>
            </div>
            <div className="flex flex-col w-56 mx-2 h-64 bg-white rounded-md justify-center items-center">
              <img src={logo} alt="" className="w-10 h-10 mb-6" />
              <h1 className="text-2xl font-medium">Contact Us</h1>
              <p className="text-center text-xs px-4 py-2">
                Just want to say hi? We'd love to hear from you. We love our
                customers and community!
              </p>
              <button className="bg-[#eb5757] px-4 py-2 text-xs rounded-md hover:bg-black hover:duration-300 text-white font-semibold">
                Send Us A Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit text-[#222] my-4">
        <div className="w-[900px] mx-auto h-fit flex justify-between flex-wrap">
          <div className=" h-20 ml-8 mt-8 w-96">
            <h1 className="text-2xl text-[#222] font-bold pb-4">Contact Us</h1>
            <p className="pb-4 text-sm">
              Acme Outdoors <br />
              123 Rainy Street <br />
              Oklahoma City, OK 73129
            </p>
            <h1 className="font-bold text-sm">General Inquiries:<span className="font-normal">(405) 555-5555</span></h1>
            <h1 className="font-bold text-sm">Customer Support:<span className="font-normal">(405) 555-5556</span></h1>
          </div>
          <div className="w-96 h-fit text-xs m-8 ">
           <h1 className="text-2xl font-bold">Contact Form</h1>
           <p>Send us a message and we'll get back to you as soon as we can!</p>
           <h1 className="p-1 font-semibold text-sm">Name</h1>
           <input type="text" placeholder="Enter Your Name" className="border-[1px] w-96 p-2 border-black rounded-md" />
           <h1 className="p-1 font-semibold text-sm">Email Address</h1>
           <input type="text" placeholder="Enter Your Email Address" className="border-[1px] w-96 p-2 border-black rounded-md" />
           <h1 className="p-1 font-semibold text-sm">Your message</h1>
            <textarea name="" id="" cols="62" rows="2" placeholder="Enter your message" className="rounded-md border-[1px] p-2 border-black"></textarea>
            <button className="bg-[#eb5757] hover:duration-300 hover:bg-black text-white font-semibold px-6 py-2 rounded-md my-2" >Submit</button>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  );
}

export default Contact;
