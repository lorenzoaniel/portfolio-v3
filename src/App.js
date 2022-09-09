import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useState } from "react";
import { routesPageData } from "./Api/RoutesPageData/routesPageData";
import { navBarData } from "./Api/NavbarData/navBarData";
import { GlobalStyleApp } from "./Styles/GlobalStyleApp/GlobalStyleApp";

import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Projects from "./Routes/Projects/Projects";
import NoMatch from "./Routes/NoMatch/NoMatch";
import Layout from "./Routes/Layout/Layout";
import NavBar from "./Components/Navbar/NavBar";
import OutletContainer from "./Components/Outlet/OutletContainer";
import NavbarMenutItem from "./Components/Navbar/NavbarMenuItem/NavbarMenutItem";
import HamburgerMenu from "./Components/Navbar/HamburgerMenu/HamburgerMenu";
import Logo from "./Components/Navbar/Logo/Logo";

const showBurgerMenu = (toggleState, routePageData, navBarData) => {
	return toggleState ? (
		<></>
	) : (
		<>
			<NavbarMenutItem
				gridAreaProp={navBarData.about.menuItemGridArea}
				classNameProp={navBarData.about.menuItemclassName}
			>
				<Link to={routePageData.about.pagePath}>{routePageData.about.pageTitle}</Link>
			</NavbarMenutItem>

			<NavbarMenutItem
				gridAreaProp={navBarData.contact.menuItemGridArea}
				classNameProp={navBarData.contact.menuItemclassName}
			>
				<Link to={routePageData.projects.pagePath}>{routePageData.projects.pageTitle}</Link>
			</NavbarMenutItem>

			<NavbarMenutItem
				gridAreaProp={navBarData.projects.menuItemGridArea}
				classNameProp={navBarData.projects.menuItemclassName}
			>
				<Link to={routePageData.contact.pagePath}>{routePageData.contact.pageTitle}</Link>
			</NavbarMenutItem>
		</>
	);
};

function App() {
	const [routePageData] = useState(routesPageData);
	const [navBarDatas] = useState(navBarData);
	const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

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
									toggleBurgerMenuProp={setToggleBurgerMenu}
								></HamburgerMenu>
								{showBurgerMenu(toggleBurgerMenu, routePageData, navBarDatas)}
								<Logo
									classNameProp={navBarDatas.logo.menuItemclassName}
									gridAreaProp={navBarDatas.logo.navbarItemGridArea}
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
								classNameProp={routePageData.projects.pageclassName}
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
								classNameProp={routePageData.projects.pageclassName}
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
