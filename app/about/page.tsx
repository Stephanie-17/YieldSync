import React from "react";
import AboutCards from "../components/AboutCards";
import NavBar from "../components/NavBar";
import { aboutInfo } from "../../data/aboutInfo";
import AboutImg from "../../public/AboutImgs.jpg";
import ValueCard from "../components/ValueCard";
import { valueInfo } from "@/data/valueInfo";

const About = () => {
	return (
		<div
			className="h-fit bg-[rgba(0,0,0,0.1)] bg-blend-multiply pb-30"
			style={{
				backgroundImage: `url(${AboutImg.src})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<NavBar />

			<h1 className="about-head text-center font-semibold text-4xl sm:text-5xl mt-15 mb-20 ">
				About Us <br />
				<span className="text-sm font-light text-blue-500 italic -mt-4 ">
					Learn about YieldSync team
				</span>
			</h1>

			<div className="about-cards flex-col sm:flex-row gap-7 flex items-center justify-center flex-wrap mb-30">
				{aboutInfo.map((info) => (
					<AboutCards key={info.id} header={info.header} answer={info.answer} />
				))}
			</div>

			<div className="values">
				<h1 className="text-center mb-15 text-5xl">Our <span className="text-[#3a33fe]">Values</span> <br />
        <span  className="text-sm font-light text-blue-500 italic -mt-4 ">What we stand for</span>
        </h1>
				<div className="value-cards flex flex-col min-[420px]:flex-row gap-7 items-center justify-center flex-wrap xl:gap-20">
					{
            valueInfo.map(info=>(
              <ValueCard key={info.id} value={info.value} body ={info.body} number={info.id}/>
            ))
          }
				</div>
			</div>
		</div>
	);
};

export default About;
