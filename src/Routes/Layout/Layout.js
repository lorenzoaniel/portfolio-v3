import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LayoutContainer = styled(motion.div)`
	height: inherit;
	width: inherit;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: min-content minmax(min-content, 1fr);
	grid-template-areas: "navbar" "outlet";
`;

export default function Layout(props) {
	const { children, classNameProp } = props;

	// const LayoutVariants = {
	// 	expandedNavbar: {
	// 		gridTemplateColumns: `100%`,
	// 	},
	// 	collapsedNavbar: {
	// 		gridTemplateColumns: `100%`,
	// 	},
	// };

	// const LayoutMotionProps = {
	// 	initial: toggleburgermenustateprop
	// 		? LayoutVariants.collapsedNavbar
	// 		: LayoutVariants.expandedNavbar,
	// };

	return (
		<LayoutContainer
			className={classNameProp}
			// {...LayoutMotionProps}
		>
			{children}
		</LayoutContainer>
	);
}
