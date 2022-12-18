import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h2 className="text-2xl text-white font-bold cursor-pointer"><a href="#"> CRYPTO</a></h2>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="#welcome"> Home</a>
        </li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="#services">Services</a>
        </li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="#transactions">Transactions</a>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">
              <a href="#welcome"> Home</a>
            </li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">
              <a href="#transactions">Transactions</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
