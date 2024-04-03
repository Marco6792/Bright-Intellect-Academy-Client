import React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface CarouselItems {
	id: number;
	image: any;
	caption: string;
}

const carousel_items: CarouselItems[] = [
	{
		id: 1,
		image: require("../images/undraw_educator_re_ju47.svg"),
		caption:
			"Unlocking Potential, Shaping Futures: Welcome to Bright Intellect Academy! Empowering Minds, Inspiring Growth: Explore Bright Intellect Academy Today!",
	},
	{
		id: 2,
		image: require("../images/undraw_online_learning_re_qw08.svg"),
		caption:
			"Where Curiosity Meets Knowledge: Join Bright Intellect Academy Now!,Excellence in Education: Discover Bright Intellect Academy's Difference!",
	},
	// {
	// 	id: 2,
	// 	image: require("../images/undraw_certificate_re_yadi.svg"),
	// 	caption:
	// 		"Join Bright Intellect Academy Now!,Excellence in Education: Discover Bright Intellect Academy's Difference!",
	// },
	{
		id: 3,
		image: require("../images/undraw_spreadsheet_re_cn18.svg"),
		caption:
			"Ignite Your Passion for Learning at Bright Intellect Academy! Building Brilliance, Nurturing Success: Enroll at Bright Intellect Academy!",
	},
];
export const CarouselComponent = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 4000,
				}),
			]}
			setApi={setApi}>
			<CarouselContent>
				{carousel_items.map((item, index: number) => (
					<CarouselItem key={index}>
						<div className="p-2">
							<Card className="border-0 dark:bg-white">
								<CardContent
									className={`flex aspect-square items-center flex-col space-y-8 max-sm:space-y-5 justify-center p-4 max-sm:p-2 rounded-md transition-opacity font-sans bg-clip-content dark:bg-white`}>
									<Image
										src={item.image?.default}
										alt="45"
										className="text-xl font-bold bg-clip-text rounded-md"
										width={500}
										height={600}
										priority
									/>

									<span className="text-[20px] bg-gray-900 dark:text-muted-foreground text-center text-slate-300 p-6 max-sm:p-2 max-sm:text-[17px] max-w-[32rem] font-Poppins font-[400] rounded-md shadow-md">
										{item.caption}
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious />
				<CarouselNext /> */}
			<div className="flex justify-center w-[4rem] mx-auto items-center dark:bg-white bg-black rounded-xl p-2">
				<div
					className={`${
						current === 1 ? "bg-red-400 ring-2 ring-offset-2  " : "bg-slate-700"
					} w-[0.4rem] h-[0.4rem]  text-center rounded-full mx-auto`}></div>
				<div
					className={`${
						current === 2 ? "bg-blue-700 ring-2 ring-offset-2" : "bg-slate-700"
					}  w-[0.4rem] h-[0.4rem]   text-center rounded-full mx-auto`}></div>
				<div
					className={`${
						current === 3 ? "bg-orange-400 ring-2 ring-offset-2" : "bg-slate-700"
					}  w-[0.4rem] h-[0.4rem]   text-center rounded-full mx-auto`}></div>
			</div>
		</Carousel>
	);
};
