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
			scale: 1,
			transition: {
				ease: "easeIn",
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
	};

	const NavbarMenuItemMotionProps = {
		variants: NavbarMenuItemVariants,
		whileHover: NavbarMenuItemVariants.hover,
		whileTap: NavbarMenuItemVariants.click,
		animate: NavbarMenuItemVariants.initial,
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
