import React from "react";
import styled from "styled-components";

const NavbarMenutItemContainer = styled.div``;

export default function NavbarMenutItem(props) {
	const { children, classNameProp } = props;

	return <NavbarMenutItemContainer className={classNameProp}>{children}</NavbarMenutItemContainer>;
}
