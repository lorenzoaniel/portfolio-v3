import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LogoContainer = styled(motion.div)`
	height: ${(props) => props.dynamicsizeprop};
	width: 100%;
	margin-left: 1vw;

	grid-area: ${(props) => props.gridareaprop};
	display: flex;
	align-items: center;
`;

export default function Logo(props) {
	const { children, classNameProp, gridareaprop, dynamicsizeprop } = props;

	const LogoVariants = {
		initial: {
			opacity: [0, 1],
			transition: {
				duration: 0.3,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.3,
			},
		},
	};

	const LogoMotionProps = {
		animate: LogoVariants.initial,
		exit: LogoVariants.exit,
	};

	return (
		<LogoContainer
			dynamicsizeprop={dynamicsizeprop}
			gridareaprop={gridareaprop}
			className={classNameProp}
			{...LogoMotionProps}
		>
			{children}
		</LogoContainer>
	);
}
