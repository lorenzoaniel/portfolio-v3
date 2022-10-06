import { React } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

import AboutMain from "../../Components/Outlet/About/AboutMain/AboutMain";
import AboutMainSubMenu from "../../Components/Outlet/About/AboutMainSubMenu/AboutMainSubMenu";
import AboutMainTitle from "../../Components/Outlet/About/AboutMainTitle/AboutMainTitle";
import AboutMainSubMenuItem from "../../Components/Outlet/About/AboutMainSubMenu/AboutMainSubMenuItem/AboutMainSubMenuItem";

import { nanoid } from "nanoid";

import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const AboutContainer = styled.div`
	${routePageBaseStyle}

	display: grid;
	grid-template-columns: repeat(5, 20%);
	grid-template-rows: 10% 45% 45%;
	grid-template-areas: "maintitle maintitle maintitle . ." "submenu main main main main" ". main main main main"; // add the other row
`;

const createMainSubMenuItems = (subMenuData) => {
	return Object.keys(subMenuData).map((curr) => {
		return (
			<AboutMainSubMenuItem
				titleprops={subMenuData[curr].title}
				pathprop={subMenuData[curr].path}
				classnameprop={subMenuData[curr].submenuitemclass}
				key={nanoid()}
			></AboutMainSubMenuItem>
		);
	});
};

export default function About(props) {
	const { classNameProp, subMenuDatasProp } = props;

	return (
		<AboutContainer className={classNameProp}>
			<AboutMainTitle></AboutMainTitle>
			<AboutMainSubMenu>{createMainSubMenuItems(subMenuDatasProp)}</AboutMainSubMenu>
			<AboutMain>
				<Outlet />
			</AboutMain>
		</AboutContainer>
	);
}
