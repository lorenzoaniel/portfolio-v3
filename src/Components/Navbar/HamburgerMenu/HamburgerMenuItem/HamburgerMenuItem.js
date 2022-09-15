import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerMenuItemIcon = styled(motion.span)`
	background-color: black;
	display: inline-block;
	width: 90%;
	height: 40%;
	border-radius: 1vw;

	grid-area: ${(props) => props.gridAreaProp};
`;

export default function HamburgerMenuItem(props) {
	const { gridAreaProp, classNameProp } = props;

	const hamburgerMenuItemVariants = {
		rest: {
			y: 0,
			transition: {
				duration: 0.5,
				type: "tween",
				ease: "easeIn",
			},
		},
		hover: {
			y: "0.5vw",
			transition: {
				duration: 0.4,
				type: "tween",
				ease: "easeOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	};

	return (
		<HamburgerMenuItemIcon
			variants={hamburgerMenuItemVariants}
			gridAreaProp={gridAreaProp}
			className={classNameProp}
		/>
	);
}
