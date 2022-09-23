import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LayoutContainer = styled(motion.div)`
	/* height: inherit;
	width: inherit;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: min-content minmax(min-content, 1fr);
	grid-template-areas: "navbar" "outlet"; */

	${(props) => props.layoutstyleprop}
`;

export default function Layout(props) {
	const { children, classNameProp, layoutstyleprop } = props;

	return (
		<LayoutContainer layoutstyleprop={layoutstyleprop} className={classNameProp}>
			{children}
		</LayoutContainer>
	);
}
