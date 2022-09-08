import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useState } from "react";
import { routesPageData } from "./Api/RoutesPageData/routesPageData";
import { GlobalStyleApp } from "./Styles/GlobalStyleApp/GlobalStyleApp";

import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Projects from "./Routes/Projects/Projects";
import NoMatch from "./Routes/NoMatch/NoMatch";
import Layout from "./Routes/Layout/Layout";
import NavBar from "./Components/Navbar/NavBar";
import OutletContainer from "./Components/Outlet/OutletContainer";
import NavbarMenutItem from "./Components/Navbar/NavbarMenuItem/NavbarMenutItem";

// const routesPageDataContext = createContext(routesPageData);

function App() {
	const [routePageData] = useState(routesPageData);

	return (
		<BrowserRouter>
			<GlobalStyleApp />
			<Routes>
				<Route
					path={routePageData.layout.pagePath}
					element={
						<Layout classNameProp={routePageData.layout.classNameMenuItem}>
							<NavBar>
								<NavbarMenutItem classNameProp={routePageData.about.classNameMenuItem}>
									<Link to={routePageData.about.pagePath}>{routePageData.about.pageTitle}</Link>
								</NavbarMenutItem>
								<NavbarMenutItem classNameProp={routePageData.projects.classNameMenuItem}>
									<Link to={routePageData.contact.pagePath}>{routePageData.contact.pageTitle}</Link>
								</NavbarMenutItem>
								<NavbarMenutItem classNameProp={routePageData.contact.classNameMenuItem}>
									<Link to={routePageData.projects.pagePath}>
										{routePageData.projects.pageTitle}
									</Link>
								</NavbarMenutItem>
							</NavBar>
							<OutletContainer />
						</Layout>
					}
				>
					<Route index element={<About pageTitleProp={routePageData.about.pageTitle} />} />
					<Route
						path={routePageData.projects.pagePath}
						element={<Projects pageTitleProp={routePageData.projects.pageTitle} />}
					/>
					<Route
						path={routePageData.contact.pagePath}
						element={<Contact pageTitleProp={routePageData.contact.pageTitle} />}
					/>
					<Route
						path={routePageData.noMatch.pagePath}
						element={<NoMatch pageTitle={routePageData.noMatch.pageTitle} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
