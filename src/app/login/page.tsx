"use client";
import { CarouselComponent } from "@/components/Carousel";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LockKeyhole, Mail, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
	const [showPassword, setShowPassword] = useState<Boolean>(false);
	const [loading, setLoading] = useState(false);
	const HandlePasswordShow = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className="font-Poppins p-4 max-sm:p-3 flex place-items-center justify-center h-screen items-center w-full">
			<div className="items-center flex from-gray-50 via-slate-100 to-purple-200 bg-gradient-to-br dark:to-blue-100  rounded-xl  shadow-md shadow-blue-100 dark:shadow-none">
				<div className=" max-w-2xl max-[1170px]:hidden rounded-br-3xl">
					<CarouselComponent />
				</div>
				<Card
					className="relative max-w-[35rem] xl:rounded-tl-none xl:rounded-bl-none pb-5 md:h-full md:p-[5rem] dark:shadow-sm dark:shadow-gray-800
				">
					{/* <ModeToggle /> */}
					<div className="p-4">
						<CardTitle className="text-4xl max-md:text-3xl font-Josefin dark:text-gray-100 font-[600]">
							Welcome Back
						</CardTitle>
						<CardDescription className="text-slate-600 pt-2">
							Please fill in correct details below
						</CardDescription>
					</div>
					<div>
						<span className="p-10 rounded-full from-blue-400 to-pink-400 bg-gradient-to-tr absolute top-2 right-5 max-340:p-6 max-340:right-1 max-390:p-7 max-390:right-2"></span>
					</div>
					{/* inputs */}
					<div>
						<CardContent className="flex flex-col space-y-6 mt-6 md:mt-10 max-md:space-y-3 max-sm:mt-3 ">
							<div className="relative">
								<Label>Email:</Label>
								<Mail className="absolute top-7  h-[3.1rem] rounded-l-md w-[2.5rem] p-2 bg-gray-100 dark:bg-gray-800" />
								<Separator
									orientation="vertical"
									className="absolute left-10 h-[3rem] bottom-[2px]"></Separator>
								<Input
									placeholder="Enter Email"
									className="pt-6 pb-6 pl-12 text-[18px] mt-1"
								/>
							</div>
							<div className="relative">
								<Label>Password:</Label>
								<LockKeyhole className="absolute top-7  h-[3.1rem] rounded-l-md w-[2.5rem] p-2 bg-gray-100 dark:bg-gray-800" />
								<Separator
									orientation="vertical"
									className="absolute left-10 h-[3rem] bottom-[2px]"></Separator>
								<Input
									placeholder="Enter Password"
									type={!showPassword ? "password" : "text"}
									className={`text-[48px] pt-6 pb-6 pl-12 placeholder:text-[17px] placeholder:absolute placeholder:top-[11.8px]  mt-1`}
								/>
							</div>

							<div className="flex justify-center relative items-center flex-col ">
								{loading && (
									<span className="animate-spin duration-500 h-8 w-8 rounded-full border-[2px] border-l-0 absolute border-r-0 border-black dark:border-white top-8"></span>
								)}
								<Button
									disabled={loading}
									className={`
            ${loading ? "bg-gray-200 dark:bg-gray-600" : ""}
            rounded-[30px] pt-8 pb-8 pl-[4.5rem] pr-[4.5rem] text-[19px] transition duration-300 hover:scale-105 max-sm:pt-6 max-sm:mb-6 max-657:mt-5 md:mt-7 dark:text-white font-[500]`}>
									{loading ? "Processing..." : "Login"}
								</Button>
							</div>
							<CardFooter
								className="dark:text-slate-700 flex justify-center  text-muted-foreground max-350:text-[16px]
            max-390:text-[15px] -mt-5
            ">
								don't have an account?{" "}
								<Link href={"/signup"} className="ddark:text-[#2c85e4] pl-4 text-[#356ada]">
									<p className="flex space-x-1">
										<span>Register</span> <TrendingUp className="w-[1rem]" />
									</p>
								</Link>
							</CardFooter>
							<Link href={"/socail-auth"} className="max-w-md mx-auto flex justify-center">
								<Button
									className="absolute rounded-[50px]  shadow-md bottom-1 flex space-x-3 max-390:bottom-0 md:bottom-3 max-390:relative"
									variant={"secondary"}>
									<Image
										src={require("../../images/google.svg")}
										alt=""
										height={20}
										width={20}
									/>
									<span className="text-slate-600 dark:text-slate-300">
										Login with google
									</span>
								</Button>
							</Link>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	);
}
