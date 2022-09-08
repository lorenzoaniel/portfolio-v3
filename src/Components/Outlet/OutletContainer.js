import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

const OutletDiv = styled.div`
	background-color: yellow;
	grid-area: outlet;
`;

export default function OutletContainer() {
	return (
		<OutletDiv>
			<Outlet />
		</OutletDiv>
	);
}