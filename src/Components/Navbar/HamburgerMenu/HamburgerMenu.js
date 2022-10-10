import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerMenuContainer = styled(motion.div)`
	height: ${(props) => props.dynamicsizeprop};
	width: ${(props) => props.dynamicsizeprop};
	margin: 1.5vw 0;
	margin-right: 1vw;

	grid-area: ${(props) => props.gridareaprop};
	display: grid;
	align-items: center;
`;

export default function HamburgerMenu(props) {
	const {
		children,
		toggleBurgerMenuProp,
		classNameProp,
		gridareaprop,
		dynamicsizeprop,
		toggleBurgerMenuStateProp,
	} = props;

	const HamburgerMenuVariants = {
		rest: {
			gridTemplateColumns: "1fr",
			gridTemplateRows: "repeat(4, 25%)",
			gridTemplateAreas: `"m-1" "m-2" "m-3" "m-4"`,
			transition: {
				staggerChildren: 0.1,
			},
		},
		hover: {
			cursor: `pointer`,
			transition: {
				staggerChildren: 0.1,
			},
		},
		click: {
			gridTemplateColumns: "repeat(4, 25%)",
			gridTemplateRows: "1fr",
			gridTemplateAreas: `"m-1 m-2 m-3 m-4"`,
		},
	};

	const HamburgerMenuMotionProps = {
		variants: HamburgerMenuVariants,
		whileHover: "hover",
		initial: "rest",
		animate: toggleBurgerMenuStateProp ? "click" : "rest",
	};

	const runClickAnimations = () => {
		toggleBurgerMenuProp((curr) => !curr);
	};

	return (
		<HamburgerMenuContainer
			dynamicsizeprop={dynamicsizeprop}
			gridareaprop={gridareaprop}
			className={classNameProp}
			onClick={runClickAnimations}
			{...HamburgerMenuMotionProps}
		>
			{children}
		</HamburgerMenuContainer>
	);
}
