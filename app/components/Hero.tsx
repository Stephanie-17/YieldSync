import React from "react";
import Image from "next/image";
import HeroImg from "../../public/HeroImg.svg";

const Hero = () => {
	return (
		<div className="xl:w-[90%]  my-auto xl:ml-19">
			<div className="flex flex-col lg:flex-row gap-6 mt-25 lg:mt-15 mx-8 items-center justify-center lg:justify-between w-[100%]">
				<div className=" sm:text-center lg:text-left">
					<h1 className="text-[45px] font-bold xl:leading-23 leading-14 lg:text-left sm:text-center lg:w-md xl:w-3xl xl:text-7xl">
						Find the Best Crypto Pools — Without the Headache.
					</h1>
					<button className="bg-[#00D4FF] text-[#000000] mt-8 px-7 py-3 rounded-3xl lg:px-12 lg:text-lg cursor-pointer sm:inline-block">
						Join the Waitlist
					</button>
				</div>
				<div className="">
					<Image width={700} src={HeroImg} alt="Hero image" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
