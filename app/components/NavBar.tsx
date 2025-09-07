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
		<div className="flex justify-between md:mx-3 lg:mx-10 lg:mr-17 sm:items-center">
			<Link className="" href={"/"}>
				<Image
					className="sm:w-[110px] "
					width={90}
					src={logo}
					alt="Yieldsync logo"
				/>
				{/* NAVBAR */}
			</Link>
			<div className=" bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-4xl py-3 w-94 md:w-120 lg:w-150 justify-center gap-12 md:gap-24 lg:gap-40 text-lg hidden sm:flex">
				<Link className="" href={"/"}>
					About Us
				</Link>
				<Link className="" href={"/"}>
					Contact Us
				</Link>
				<Link className="" href={"/"}>
					FAQs
				</Link>
			</div>
			<Link href={"/"}>
				<button
					className={`bg-[#00D4FF] text-[#000000] px-7 py-3 rounded-3xl lg:px-12 lg:text-base cursor-pointer hidden sm:inline-block`}
				>
					Sign up
				</button>
			</Link>

			{/* SIDEBAR */}
			<Image
				className={` sm:hidden cursor-pointer mr-3 -mt-4 ${
					toggleMenu && "hidden"
				} `}
				width={40}
				onClick={() => setToggleMenu(!toggleMenu)}
				src={menu}
				alt="menu"
			/>
			<div
				className={`flex-col mt-3 mr-3  text-xl ${
					toggleMenu ? "flex" : "hidden"
				}  text-center  bg-white/7 backdrop-blur-lg shadow-lg border border-white/50 rounded-xl py-6 relative    w-[170px]`}
			>
				<Image
					onClick={() => setToggleMenu(false)}
					src={close}
					alt="close"
					width={25}
					className={`absolute top-3 cursor-pointer -left-9 ${
						toggleMenu && "inline"
					}`}
				/>
				<Link
					className="hover:bg-cyan-500 hover:text-black duration-1000 py-4 block"
					href={"/"}
				>
					About Us
				</Link>
				<Link
					className="hover:bg-cyan-500 hover:text-black duration-1000 py-4 block"
					href={"/"}
				>
					Contact Us
				</Link>
				<Link
					className="hover:bg-cyan-500 hover:text-black duration-1000 py-4 block"
					href={"/"}
				>
					FAQs
				</Link>
				<Link href={"/"}>
					<button className="bg-[#00D4FF] text-[#494949] px-7 py-2 rounded-3xl mt-3">
						Sign up
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
