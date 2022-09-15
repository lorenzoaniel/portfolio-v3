import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerMenuItemIcon = styled(motion.span)`
	background-color: black;
	display: inline-block;
	border-radius: 1vw;

	grid-area: ${(props) => props.gridareaprop};
`;

export default function HamburgerMenuItem(props) {
	const { gridareaprop, classNameProp, clickAnimationRotateValueProp, toggleBurgerMenuStateProp } =
		props;

	const HamburgerMenuItemVariants = {
		rest: {
			y: 0,
			width: "90%",
			height: "40%",
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
		click: {
			width: "40%",
			height: "90%",
			rotate: [360, clickAnimationRotateValueProp],
			scale: [0.5, 1], //otherwise it overflows the html element
			transition: {
				duration: 0.5,
				type: "tween",
				ease: "easeIn",
			},
		},
		exitClick: {
			rotate: [360, 0],
			scale: [0.5, 1], //otherwise it overflows the html element
			transition: {
				duration: 0.5,
				type: "tween",
				ease: "easeOut",
			},
		},
	};

	const HamburgerMenuItemMotionProps = {
		variants: HamburgerMenuItemVariants,
		animate:
			toggleBurgerMenuStateProp /* this is to make sure that transitioning to 'open menu' state still has a rotation animation */
				? HamburgerMenuItemVariants.click
				: HamburgerMenuItemVariants.exitClick,
	};

	return (
		<HamburgerMenuItemIcon
			gridareaprop={gridareaprop}
			className={classNameProp}
			{...HamburgerMenuItemMotionProps}
		/>
	);
}
