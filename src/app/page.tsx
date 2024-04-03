"use client";
import React, { useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import { motion } from "framer-motion";

interface Props {}

function page(props: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const [activeItem, setActiveItem] = useState<number>(0);

	return (
		<div>
			<Heading
				title="Bright Intelect Academy"
				desc="Unlocking Potential, Shaping Futures: Welcome to Bright Intellect Academy! Empowering Minds, Inspiring Growth: Explore Bright Intellect Academy Today!"
				keywords="GCE Advance Level, GCE Ordinary Level"
			/>
			<motion.div
				initial={{
					y: -90,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
					transition: {
						delayChildren: 0.6,
						staggerChildren: 0.6,
					},
				}}>
				<Header
					open={open}
					activeItem={activeItem}
					setOpen={setOpen}
					setActiveItem={setActiveItem}
				/>
			</motion.div>
		</div>
	);
}

export default page;
