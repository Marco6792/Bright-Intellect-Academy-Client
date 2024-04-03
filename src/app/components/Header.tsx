"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "../utils/NavItems";
import { ModeToggle } from "@/components/ModeToggle";
import { AlignRight, UserCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	activeItem: number;
	setActiveItem: (activeItime: number) => void;
}

export default function Header({ activeItem, setOpen, open }: Props) {
	const [activeHeight, setActiveHeight] = useState<boolean>(false);
	const [openSidebar, setOpenSidebar] = useState<boolean>(false);

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 80) {
				setActiveHeight(true);
			} else {
				setActiveHeight(false);
			}
		});
	}

	const handleClose = (e: any) => {
		if (e.target.id == "screen") {
			setOpenSidebar(false);
		}
	};

	const container = {
		hidden: { opacity: 0, x: 90 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.6,
			},
		},
	};

	return (
		<div className="w-full relative">
			<div
				className={`${
					activeHeight
						? "dark:bg-opacity-50 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] shadow-xl transition duration-500"
						: "w-full h-[80px] z-[80] dark:shadow border rounded-br-xl rounded-bl-xl"
				}`}>
				<div className="w-[97%] 1000px:w-[90%] m-auto py-2 h-full">
					<div className="w-full h-[80px] flex items-center justify-between p-3">
						<div>
							<Link
								href={"/"}
								className="text-[25px]   font-Poppins font-[700] text-primary">
								<span className="dark:text-[#37a39a]">BIA-</span>
								<span className="dark:text-primary text-[#37a39a]"> GCE</span>
							</Link>
						</div>
						<div className="flex items-center">
							<NavItems activeItem={activeItem} isMobile={false} open={open} />
							{/* ---only fo mobile screens */}

							<UserCircle
								size={35}
								className="cursor-pointer dark:text-white text-black m-3"
								onClick={() => setOpen(true)}
							/>
							{/* ---large screens */}
							<Separator orientation="vertical" className=""></Separator>
							<div className="927px:hidden">
								<AlignRight
									size={35}
									className=" dark:text-white text-black"
									onClick={() => setOpenSidebar((prev) => !prev)}
								/>
							</div>
							<div className="max-927px:hidden">
								<ModeToggle />
							</div>
						</div>
					</div>
				</div>

				{/*  Mobile sidebar */}
				{openSidebar && (
					<motion.div
						variants={container}
						initial={"hidden"}
						animate={"visible"}
						className="fixed overflow-y-scroll w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
						onClick={handleClose}
						id="screen">
						<div className="w-[70%] max-800px:w-[90%] fixed h-screen z-[999999] bg-white dark:bg-slate-900 dark:bg-opacity-95 top-0 right-0">
							<Card className=" p-1 rounded-md  m-2  w-fit border  relative">
								<X
									size={37}
									className=" dark:text-white text-black  rounded-md"
									onClick={() => setOpenSidebar((prev) => !prev)}
								/>
							</Card>
							<div className="mt-4">
								<NavItems activeItem={activeItem} isMobile={true} open={open} />
							</div>
						</div>
						{openSidebar && (
							<div className="absolute bottom-12 right-5 z-[9999999]">
								<ModeToggle />
							</div>
						)}
					</motion.div>
				)}
			</div>
		</div>
	);
}
