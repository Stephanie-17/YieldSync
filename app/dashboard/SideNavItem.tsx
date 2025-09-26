import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SideNavItemProps {
	name: string;
	image: string;
	href: string;
	isActive: boolean;
}

const SideNavItem = ({ name, image, href, isActive }: SideNavItemProps) => {
	return (
		<Link
			href={href}
			className={`flex w-[90%]  px-3 gap-3 items-center cursor-pointer hover:bg-blue-900 py-4 duration-500 transition-colors  ${
				isActive && "shadow-[0_0px_15px]  shadow-black bg-blue-800"
			}`}
		>
			<Image src={image} alt="dashboard icon" width={26} height={30} />
			<p>{name}</p>
		</Link>
	);
};

export default SideNavItem;
