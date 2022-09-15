import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerMenuContainer = styled(motion.div)`
	/* background-color: blue; */
	height: ${(props) => props.dynamicSizeProp};
	width: ${(props) => props.dynamicSizeProp};
	margin: 1.5vw 0;
	margin-right: 1vw;

	grid-area: ${(props) => props.gridAreaProp};
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 25%);
	grid-template-areas: "m-1" "m-2" "m-3" "m-4";
	align-items: center;
`;

export default function HamburgerMenu(props) {
	const { children, toggleBurgerMenuProp, classNameProp, gridAreaProp, dynamicSizeProp } = props;

	const HamburgerMenuVariants = {
		rest: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		hover: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<HamburgerMenuContainer
			dynamicSizeProp={dynamicSizeProp}
			gridAreaProp={gridAreaProp}
			className={classNameProp}
			onClick={() => toggleBurgerMenuProp((curr) => !curr)}
			variants={HamburgerMenuVariants}
			whileHover={"hover"}
			initial={"rest"}
			animate={"rest"}
		>
			{children}
		</HamburgerMenuContainer>
	);
}
