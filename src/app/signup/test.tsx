"use client";
import { CarouselComponent } from "@/components/Carousel";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {}
function page(props: Props) {
	const [showPassword, setShowPassword] = useState<Boolean>(false);
	const [textPassword, setTextPassword] = useState("password");
	const [loading, setLoading] = useState(true);
	const [largeScreen, setLargeScreen] = useState(true);

	const HandlePasswordShow = () => {
		if (textPassword === "password") {
			setTextPassword("text");
			setShowPassword((prev) => !prev);
		} else if (textPassword == "text") {
			setTextPassword("password");
			setShowPassword((prev) => !prev);
		}
	};
	useEffect(() => {
		HandlePasswordShow;
	}, [showPassword, textPassword]);

	const str =
		"flex-row-reverse items-center max-w-7xl flex from-gray-50 via-gray-100 to-purple-100 bg-gradient-to-br dark:to-blue-100 mx-auto rounded-md";

	return (
		<div
			className={`${
				largeScreen && "flex justify-center place-items-center h-screen items-center"
			}p-4 max-sm:p-3 flex h-screen flex-col justify-center `}>
			<div className={`${largeScreen && "grid"}`}>
				{largeScreen && (
					<div className="max-w-2xl ml-1 max-md:hidden">
						<CarouselComponent />
					</div>
				)}
				<Card className=" max-320:mt-[4rem] p-10 max-sm:p-0 max-w-[35rem]  mx-auto font-sans md:shadow-purple-300 shadow-md dark:shadow-none relative block flex-shrink-0">
					<div className="p-7 max-sm:p-4 relative">
						<div>
							<CardTitle className="text-3xl dark:text-gray-100 font-sans">
								Create Account
							</CardTitle>
							<CardDescription className="text-slate-600 pt-2">
								Please fill the input below
							</CardDescription>
						</div>
						<div>
							<span className="p-10 rounded-full from-blue-400 to-pink-400 bg-gradient-to-tr absolute top-4 right-5 max-340:p-6 max-340:right-3 max-390:p-8 max-390:right-3"></span>
						</div>
					</div>
					<CardContent className="flex flex-col space-y-6 mt-5 max-md:space-y-3 max-sm:mt-3">
						<div className="relative flex flex-col  space-y-2">
							<Label>UserName:</Label>
							<User className="absolute top-[13px]  h-[3.1rem] rounded-l-md w-[2.5rem] p-2 bg-gray-100 dark:bg-gray-800" />
							<Separator
								orientation="vertical"
								className="absolute left-10 h-[3rem] top-4 bottom-[2px]"></Separator>
							<Input
								placeholder="Enter UserName"
								className="pt-6 pb-6 pl-12 text-[18px] mt-1"
							/>
						</div>
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
							{showPassword ? (
								<Eye
									className="absolute top-7 right-0 h-[3.1rem] rounded-l-md w-[1.8rem] p-1 bg-gray-100 dark:bg-gray-800"
									onClick={HandlePasswordShow}
								/>
							) : (
								<EyeOff
									className="absolute top-7 right-0  h-[3.1rem] rounded-l-md w-[1.8rem] p-1 bg-gray-100 dark:bg-gray-800"
									onClick={HandlePasswordShow}
								/>
							)}
							<Separator
								orientation="vertical"
								className="absolute left-10 h-[3rem] bottom-[2px]"></Separator>
							<Input
								placeholder="Enter Password"
								type={textPassword}
								className={`pt-6 pb-6 pl-12 ${
									textPassword == "password"
										? "text-[48px]"
										: textPassword == "text"
										? "text-[17px]"
										: null
								} placeholder:text-[17px] placeholder:absolute placeholder:top-[11.8px]  mt-1`}
							/>
						</div>
						<div className="relative">
							<Label>Confirm Password:</Label>
							<LockKeyhole className="absolute top-7  h-[3.1rem] rounded-l-md w-[2.5rem] p-2 bg-gray-100 dark:bg-gray-800" />
							<Separator
								orientation="vertical"
								className="absolute left-10 h-[3rem] bottom-[2px]"></Separator>
							<Input
								placeholder="Confirm Password"
								type={textPassword}
								className={`pt-6 pb-6 pl-12 ${
									textPassword == "password"
										? "text-[48px]"
										: textPassword == "text"
										? "text-[17px]"
										: null
								} placeholder:text-[17px] placeholder:absolute placeholder:top-[11.8px]  mt-1`}
							/>
						</div>
						<div className="flex justify-center relative items-center flex-col ">
							{loading && (
								<span className="animate-spin duration-500 h-8 w-8 rounded-full border-[2px] border-l-0 absolute border-r-0 border-black dark:border-white top-8"></span>
							)}
							<Button
								disabled={loading}
								className={`
            ${loading ? "bg-gray-200 dark:bg-gray-600" : "dark:bg-[#55dbdb]"}
            rounded-[30px] pt-8 pb-8 pl-[4.5rem] pr-[4.5rem]  dark:text-slate-800 text-[19px] dark:hover:bg-[#4fbcbc] transition duration-300 hover:scale-105 max-sm:pt-6 max-sm:mb-6 max-657:mt-5 md:mt-7`}>
								{loading ? "Processing..." : "Register"}
							</Button>
						</div>
						<CardFooter
							className="dark:text-slate-700 flex justify-center  text-muted-foreground max-350:text-[16px]
            max-390:text-[15px] -mt-5
            ">
							Already have an account?{" "}
							<Link href={"/login"} className="dark:text-[#55dbdb] pl-4 text-[#008080]">
								Login
							</Link>
						</CardFooter>
						<Link href={"/socail-auth"} className="max-w-md mx-auto flex justify-center">
							<Button
								className="absolute bottom-2 flex space-x-3 max-390:bottom-0 md:bottom-5"
								variant={"secondary"}>
								<Image
									src={require("../../images/google.svg")}
									alt=""
									height={20}
									width={20}
								/>
								<span className="text-slate-700 dark:text-slate-300">
									Continue with google
								</span>
							</Button>
						</Link>
					</CardContent>
					<ModeToggle />
				</Card>
			</div>
		</div>
	);
}

export default page;
