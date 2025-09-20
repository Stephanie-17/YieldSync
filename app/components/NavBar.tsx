"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/YieldSync-logo.svg";
import menu from "../../public/menuBar.svg";
import close from "../../public/close.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="flex justify-between md:mx-3 lg:mx-10 lg:mr-17 sm:items-center py-4">
      <Link className="" href={"/"}>
        <Image
          className="sm:w-[110px]"
          width={90}
          src={logo}
          alt="Yieldsync logo"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="bg-white/5 backdrop-blur-lg shadow-lg border border-white/20 rounded-4xl py-3 w-94 md:w-120 lg:w-150 justify-center gap-12 md:gap-24 lg:gap-40 text-lg hidden sm:flex">
        <Link 
          className="relative group  rounded-4xl transition-all duration-300 hover:-translate-y-1"
          href={"/"}
        >
          Home
          <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
        
        <Link 
          className="relative group  rounded-4xl transition-all duration-300 hover:-translate-y-1"
          href={"/about"}
        >
          About Us
          <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
        
        <Link 
          className="relative group  rounded-4xl transition-all duration-300 hover:-translate-y-1"
          href={"/faqs"}
        >
          FAQs
          <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
      </div>
      
      <Link href={"/sign-up"}>
        <button
          className={`bg-[#00D4FF] text-[#000000] px-7 py-3 rounded-3xl lg:px-12 lg:text-base cursor-pointer hidden sm:inline-block transition-all duration-300 hover:bg-[#00a2ff] hover:shadow-[0_1px_15px_#00a2ff]`}
        >
          Sign up
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <Image
        className={`sm:hidden cursor-pointer mr-3 ${toggleMenu && "hidden"}`}
        width={40}
        onClick={() => setToggleMenu(!toggleMenu)}
        src={menu}
        alt="menu"
      />
      
      {/* Mobile Navigation */}
      <div
        className={`flex-col mt-3 mr-3 text-xl ${
          toggleMenu ? "flex" : "hidden"
        } text-center bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl py-6 relative w-[170px] z-50`}
      >
        <Image
          onClick={() => setToggleMenu(false)}
          src={close}
          alt="close"
          width={25}
          className={`absolute top-3 cursor-pointer right-3 ${
            toggleMenu && "inline"
          }`}
        />
        
        <Link
          className="relative group px-4 py-3 block transition-all duration-300 hover:bg-[#00a2ff7f] hover:text-black"
          href={"/about"}
          onClick={() => setToggleMenu(false)}
        >
          About Us
          <div className="absolute bottom-2 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
        
        <Link
          className="relative group px-4 py-3 block transition-all duration-300 hover:bg-[#00a2ff7f] hover:text-black"
          href={"/contact"}
          onClick={() => setToggleMenu(false)}
        >
          Contact Us
          <div className="absolute bottom-2 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
        
        <Link
          className="relative group px-4 py-3 block transition-all duration-300 hover:bg-[#00a2ff7f] hover:text-black"
          href={"/faqs"}
          onClick={() => setToggleMenu(false)}
        >
          FAQs
          <div className="absolute bottom-2 left-1/2 h-0.5 w-0 bg-blue-400 rounded transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></div>
        </Link>
        
        <Link 
          href={"/sign-up"}
          onClick={() => setToggleMenu(false)}
          className="mt-3"
        >
          <button className="bg-[#00D4FF] text-[#494949] px-7 py-2 rounded-3xl transition-all duration-300 hover:bg-[#00a2ff] hover:shadow-[0_1px_15px_#00a2ff]">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
