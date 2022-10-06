import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

const OutletDiv = styled.div`
	background-color: var(--grey-outlet-bg);
	grid-area: outlet;
	padding: 0 7vw;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: var(--black-shadow-inset);
`;

export default function OutletContainer() {
	return (
		<OutletDiv>
			<Outlet />
		</OutletDiv>
	);
}
