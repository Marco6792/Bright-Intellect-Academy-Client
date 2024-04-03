"use client";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogIn, UserRoundPlus } from "lucide-react";
import { CarouselComponent } from "@/components/Carousel";

interface Props {}

const autoCarousel = () => {
	return (
		<div className="h-screen w-full ">
			<div className="w-full md:max-w-[66%] mx-auto md:flex justify-between h-screen items-center md:space-x-14 relative font-Poppins">
				{/* <h1 className="absolute z-20 text-2xl md:text-3xl md:top-[6rem]  rotate-20 left-10 text-clip opacity-30 shadow-md p-5 rounded-[50px] bg-white max-sm:top-1 text-center max-657:text-xl ">
				Welcome To Bright Intellect Academy
			</h1> */}
				<CarouselComponent />
				<div className="flex justify-center items-center mt-10 flex-col space-y-5 place-items-center max-sm:space-y-2 max-sm:mt-5">
					<Link href={"/signup"}>
						<Button className="max-sm:pl-t-5 max-sm:pb-[27px] max-sm:pt-[27px]  pl-16 pt-7 pb-7 dark:text-white pr-16 text-xl rounded-[30px] font-Poppins flex justify-between space-x-10  relative hover:scale-105 transition-all duration-300F">
							<UserRoundPlus className="w-[3.5rem] p-4 absolute rounded-l-[50px] left-10 h-full" />
							<span>Register Now</span>
						</Button>
					</Link>
					<Link href={"/login"}>
						<Button className="max-sm:pl-t-5 dark:text-white  max-sm:pb-[27px] max-sm:pt-[27px]  pl-[4.7rem] pt-7 pb-7 pr-[4.7rem] text-xl rounded-[30px] flex justify-between space-x-10 relative hover:scale-105 transition-all duration-300">
							<LogIn className="w-[3.5rem]   p-4 absolute rounded-l-[50px] left-10  h-full " />

							<span>Login Now</span>
						</Button>
					</Link>
					<Link href={"/socail-auth"}>
						<Button
							className="  rounded-3xl p-4 flex justify-between space-x-3"
							variant={"secondary"}>
							<Image
								src={require("../../images/google.svg")}
								alt=""
								height={28}
								width={28}
							/>
							<span className="text-[15px] p-2 font-Poppins">Continue with google</span>
						</Button>
					</Link>
				</div>
				{/* <ModeToggle /> */}
			</div>
		</div>
	);
};

export default autoCarousel;
