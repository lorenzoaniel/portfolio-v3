import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarMenuItemContainer = styled(motion.div)`
	font-family: "Bebas Neue", cursive;
	grid-area: ${(props) => props.gridareaprop};

	a {
		text-decoration: none;
		font-size: ${(props) => props.dynamicsizeprop};
		text-shadow: var(--darkgrey-shadow-text-menuitems);
		color: var(--grey-navbar-items);
	}

	&:hover {
		a {
			transition: color 0.5s ease-in-out;
			color: var(--darkgrey-navbar-hover);
		}
	}
`;

export default function NavbarMenuItem(props) {
	const { children, classNameProp, gridareaprop, dynamicsizeprop } = props;

	const NavbarMenuItemVariants = {
		initial: {
			opacity: [0, 1],
			scale: 1,
			transition: {
				duration: 0.3,
			},
		},
		hover: {
			scale: 1.1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
			},
		},
		click: {
			scale: 0.9,
			transition: {
				ease: "easeInOut",
				duration: 0.1,
			},
		},
		exit: {
			opacity: [1, 0],
			transition: {
				duration: 0.3,
			},
		},
	};

	const NavbarMenuItemMotionProps = {
		variants: NavbarMenuItemVariants,
		whileHover: NavbarMenuItemVariants.hover,
		whileTap: NavbarMenuItemVariants.click,
		animate: NavbarMenuItemVariants.initial,
		exit: NavbarMenuItemVariants.exit,
	};

	return (
		<NavbarMenuItemContainer
			dynamicsizeprop={dynamicsizeprop}
			gridareaprop={gridareaprop}
			className={classNameProp}
			{...NavbarMenuItemMotionProps}
		>
			{children}
		</NavbarMenuItemContainer>
	);
}
