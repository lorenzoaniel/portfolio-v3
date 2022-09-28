import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { routesPageData } from "./Api/RoutesPageData/routesPageData";
import { navBarData } from "./Api/NavbarData/navBarData";
import { hamburgerMenuData } from "./Api/NavbarData/HamburgerMenuData/hamburgerMenuData";
import { logoData } from "./Api/LogoData/logoData";
import AboutSubMenuItemData from "./Api/RoutesPageData/About/AboutSubMenuItemData/AboutSubMenuItemData";
import aboutPageData from "./Api/RoutesPageData/About/aboutPageData.js";

import { GlobalStyleApp } from "./Styles/GlobalStyleApp/GlobalStyleApp";
import { appLayoutStyle } from "./Styles/Layout/AppLayoutStyle/appLayoutStyle";

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
import LogoLetter from "./Components/Navbar/Logo/LogoLetter/LogoLetter";
import Summary from "./Routes/About/AboutMain/Summary";
import Skills from "./Routes/About/AboutMain/Skills";
import Socials from "./Routes/About/AboutMain/Socials";

import useCurrentWidth from "./Helpers/useCurrentWidth";
import { nanoid } from "nanoid";

const showBurgerMenu = (toggleState, routePageData, navBarData, dynamicSize) => {
	const navbarMenuItems = ["about", "projects", "contact"];
	let navbarMenuItemArray = [];

	for (let menuItemQuantity = 0; menuItemQuantity < 3; menuItemQuantity++) {
		const tempCategory = navbarMenuItems[menuItemQuantity];

		navbarMenuItemArray.push(
			<NavbarMenuItem
				gridareaprop={navBarData[tempCategory].menuItemGridArea}
				classNameProp={navBarData[tempCategory].menuItemclassName}
				dynamicsizeprop={dynamicSize}
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

const createHamburgerIcons = (hamburgerMenuDatas, toggleBurgerMenu) => {
	return Object.keys(hamburgerMenuDatas).map((currBurger) => {
		return (
			<HamburgerMenuItem
				classNameProp={hamburgerMenuDatas[currBurger].hamburgerIconClassName}
				gridareaprop={hamburgerMenuDatas[currBurger].hamburgerIconGridArea}
				toggleBurgerMenuStateProp={toggleBurgerMenu}
				clickAnimationRotateValueProp={
					hamburgerMenuDatas[currBurger].hamburgerIconClickAnimationRotateValue
				}
				key={nanoid()}
			/>
		);
	});
};

const createLogoLetters = (logoDatas, dynamicSize) => {
	return logoDatas.map((currLetter) => {
		return (
			<LogoLetter dynamicsizeprop={dynamicSize} key={nanoid()}>
				{currLetter}
			</LogoLetter>
		);
	});
};

function App() {
	const [routePageData] = useState(routesPageData);
	const [navBarDatas] = useState(navBarData);
	const [hamburgerMenuDatas] = useState(hamburgerMenuData);
	const [logoDatas] = useState(logoData);
	const [subMenuDatas] = useState(AboutSubMenuItemData);
	const [aboutPageDatas] = useState(aboutPageData);

	const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

	let dynamicNavbarItemSize = useCurrentWidth();

	return (
		<>
			<GlobalStyleApp />
			<Routes>
				<Route
					path={routePageData.layout.pagePath}
					element={
						<Layout
							layoutstyleprop={appLayoutStyle}
							classNameProp={routePageData.layout.classNameMenuItem}
						>
							<NavBar>
								<HamburgerMenu
									classNameProp={navBarDatas.burgermenu.menuItemclassName}
									gridareaprop={navBarDatas.burgermenu.navbarItemGridArea}
									dynamicsizeprop={dynamicNavbarItemSize}
									toggleBurgerMenuProp={setToggleBurgerMenu}
									toggleBurgerMenuStateProp={toggleBurgerMenu}
								>
									{createHamburgerIcons(hamburgerMenuDatas, toggleBurgerMenu)}
								</HamburgerMenu>
								<AnimatePresence>
									{showBurgerMenu(
										toggleBurgerMenu,
										routePageData,
										navBarDatas,
										dynamicNavbarItemSize
									)}
								</AnimatePresence>
								<AnimatePresence>
									{toggleBurgerMenu ? (
										""
									) : (
										<Logo
											classNameProp={navBarDatas.logo.menuItemclassName}
											gridareaprop={navBarDatas.logo.navbarItemGridArea}
											dynamicsizeprop={dynamicNavbarItemSize}
										>
											{createLogoLetters(logoDatas, dynamicNavbarItemSize)}
										</Logo>
									)}
								</AnimatePresence>
							</NavBar>
							<OutletContainer />
						</Layout>
					}
				>
					<Route
						index
						element={
							<Navigate
								replace
								to="/summary"
							/> /*makes sure that clicking 'about' will redirect to /summary but still insures that refreshing page will keep current url */
						}
					/>
					<Route
						path={routePageData.about.pagePath}
						element={
							<About
								classNameProp={routePageData.about.pageclassName}
								subMenuDatasProp={subMenuDatas}
							/>
						}
					>
						<Route
							index
							element={
								<Summary
									dynamicsizeprop={dynamicNavbarItemSize}
									summaryprop={aboutPageDatas.mainSection.introduction}
								/>
							}
						/>
						<Route
							path={subMenuDatas.summary.path}
							element={
								<Summary
									dynamicsizeprop={dynamicNavbarItemSize}
									summaryprop={aboutPageDatas.mainSection.introduction}
								/>
							}
						/>
						<Route path={subMenuDatas.skills.path} element={<Skills />} />
						<Route path={subMenuDatas.socials.path} element={<Socials />} />
					</Route>
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
		</>
	);
}

export default App;
