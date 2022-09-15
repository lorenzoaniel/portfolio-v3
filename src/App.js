import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useState } from "react";

import { routesPageData } from "./Api/RoutesPageData/routesPageData";
import { navBarData } from "./Api/NavbarData/navBarData";
import { hamburgerMenuData } from "./Api/NavbarData/HamburgerMenuData/hamburgerMenuData";

import { GlobalStyleApp } from "./Styles/GlobalStyleApp/GlobalStyleApp";

import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Projects from "./Routes/Projects/Projects";
import NoMatch from "./Routes/NoMatch/NoMatch";
import Layout from "./Routes/Layout/Layout";
import NavBar from "./Components/Navbar/NavBar";
import OutletContainer from "./Components/Outlet/OutletContainer";
import NavbarMenuItem from "./Components/Navbar/NavbarMenuItem/NavbarMenuItem";
import HamburgerMenu from "./Components/Navbar/HamburgerMenu/HamburgerMenu";
import HamburgerMenuItem from "./Components/Navbar/HamburgerMenu/HamburgerMenuItem/HamburgerMenuItem";
import Logo from "./Components/Navbar/Logo/Logo";

import useCurrentWidth from "./Helpers/useCurrentWidth";
import { nanoid } from "nanoid";

const showBurgerMenu = (toggleState, routePageData, navBarData, dynamicSize) => {
	const navbarMenuItems = ["about", "projects", "contact"];
	let navbarMenuItemArray = [];

	for (let menuItemQuantity = 0; menuItemQuantity < 3; menuItemQuantity++) {
		const tempCategory = navbarMenuItems[menuItemQuantity];

		navbarMenuItemArray.push(
			<NavbarMenuItem
				gridAreaProp={navBarData[tempCategory].menuItemGridArea}
				classNameProp={navBarData[tempCategory].menuItemclassName}
				dynamicSizeProp={dynamicSize}
				key={nanoid()}
			>
				<Link key={nanoid()} to={routePageData[tempCategory].pagePath}>
					{routePageData[tempCategory].pageTitle}
				</Link>
			</NavbarMenuItem>
		);
	}

	return toggleState ? <></> : navbarMenuItemArray;
};

const createHamburgerIcons = (hamburgerMenuDatas) => {
	return Object.keys(hamburgerMenuDatas).map((currBurger) => {
		return (
			<HamburgerMenuItem
				classNameProp={hamburgerMenuDatas[currBurger].hamburgerIconClassName}
				gridAreaProp={hamburgerMenuDatas[currBurger].hamburgerIconGridArea}
				key={nanoid()}
			/>
		);
	});
};

const toggleLogoOnClick = () => {};

function App() {
	const [routePageData] = useState(routesPageData);
	const [navBarDatas] = useState(navBarData);
	const [hamburgerMenuDatas] = useState(hamburgerMenuData);

	const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

	let dynamicNavbarItemSize = useCurrentWidth();

	return (
		<BrowserRouter>
			<GlobalStyleApp />
			<Routes>
				<Route
					path={routePageData.layout.pagePath}
					element={
						<Layout classNameProp={routePageData.layout.classNameMenuItem}>
							<NavBar>
								<HamburgerMenu
									classNameProp={navBarDatas.burgermenu.menuItemclassName}
									gridAreaProp={navBarDatas.burgermenu.navbarItemGridArea}
									dynamicSizeProp={dynamicNavbarItemSize}
									toggleBurgerMenuProp={setToggleBurgerMenu}
								>
									{createHamburgerIcons(hamburgerMenuDatas)}
								</HamburgerMenu>
								{showBurgerMenu(
									toggleBurgerMenu,
									routePageData,
									navBarDatas,
									dynamicNavbarItemSize
								)}
								<Logo
									classNameProp={navBarDatas.logo.menuItemclassName}
									gridAreaProp={navBarDatas.logo.navbarItemGridArea}
									dynamicSizeProp={dynamicNavbarItemSize}
									toggleLogoProp={toggleLogoOnClick}
								></Logo>
							</NavBar>
							<OutletContainer />
						</Layout>
					}
				>
					<Route
						index
						element={
							<About
								classNameProp={routePageData.about.pageclassName}
								pageTitleProp={routePageData.about.pageTitle}
							/>
						}
					/>
					<Route
						path={routePageData.projects.pagePath}
						element={
							<Projects
								classNameProp={routePageData.projects.pageclassName}
								pageTitleProp={routePageData.projects.pageTitle}
							/>
						}
					/>
					<Route
						path={routePageData.contact.pagePath}
						element={
							<Contact
								classNameProp={routePageData.contact.pageclassName}
								pageTitleProp={routePageData.contact.pageTitle}
							/>
						}
					/>
					<Route
						path={routePageData.nomatch.pagePath}
						element={
							<NoMatch
								classNameProp={routePageData.nomatch.pageclassName}
								pageTitle={routePageData.nomatch.pageTitle}
							/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
