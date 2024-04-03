import React from "react";

interface Props {
	title: string;
	desc: string;
	keywords?: string;
}

function Heading({ title, desc, keywords }: Props) {
	return (
		<>
			<title>{title}</title>
			<meta name="desc" content={desc} />
			<meta name="keywords" content={keywords} />
		</>
	);
}

export default Heading;
