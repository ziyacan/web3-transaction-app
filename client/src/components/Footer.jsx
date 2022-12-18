import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
      <h2 className="text-2xl text-white font-bold cursor-pointer"><a href="#"> CRYPTO</a></h2>
      </div>
      <ul className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <li className="text-white text-base text-center mx-2 cursor-pointer"><a href="#welcome"> Home</a></li>
        <li className="text-white text-base text-center mx-2 cursor-pointer"><a href="#services">Services</a></li>
        <li className="text-white text-base text-center mx-2 cursor-pointer"><a href="#transactions">Transactions</a></li>
      </ul>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Copyright</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;