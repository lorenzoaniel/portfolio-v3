import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.div``;

function Socials(props) {
	const { children } = props;
	return <SocialsContainer>{children}</SocialsContainer>;
}

export default Socials;
