import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LayoutContainer = styled(motion.div)`
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
