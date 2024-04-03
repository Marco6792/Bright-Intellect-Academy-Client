import Link from "next/link";
import React from "react";

interface Props {
	activeItem: number;
	isMobile: boolean;
	open: boolean;
	openSidebar?: boolean;
}

export const navItemsData: Array<{ name: string; url: string }> = [
	{ name: "Home", url: "/" },
	{ name: "Courses", url: "/courses" },
	{ name: "Papers", url: "/papers" },
	{ name: "About", url: "/about" },
	{ name: "Policy", url: "/policy" },
	{ name: "GCE News", url: "/news" },
];

export default function NavItems({ activeItem, isMobile, open, openSidebar }: Props) {
	return (
		<>
			<div className="hidden 927px:flex  927px:items-center">
				{navItemsData &&
					navItemsData.map((item, index) => (
						<Link href={item.url} key={index} passHref>
							<span
								className={`${
									activeItem === index
										? "dark:text-[#37a39a] text-[crimson] "
										: "dark:text-white text-black hover:dark:text-[#37a39a] transition duration-300 hover:text-[crimson]"
								} text-[18px] px-6 font-Poppins font-[500] max-1100px:font-[400] max-1100px:text-[17px]`}>
								{item.name}
							</span>
						</Link>
					))}
			</div>

			{isMobile && (
				<div className="927px:hidden mt-2">
					<div className="w-full text-center py-5">
						{navItemsData &&
							navItemsData.map((item, index) => (
								<Link href={item.url} key={index} passHref>
									<span
										className={`${
											activeItem === index
												? "dark:text-[#37a39a] text-[crimson] "
												: "dark:text-white text-black hover:dark:text-[#37a39a] transition duration-300 hover:text-[crimson]"
										} text-[18px] block p-4 font-Poppins font-[500] `}>
										{item.name}
									</span>
								</Link>
							))}
					</div>
				</div>
			)}
		</>
	);
}
