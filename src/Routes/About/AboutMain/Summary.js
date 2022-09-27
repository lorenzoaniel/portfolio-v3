import React from "react";
import styled from "styled-components";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";

const SummaryContainer = styled.div`
	${AboutOutletBaseStyle};
`;

export default function Summary() {
	// const { children } = props;
	return <SummaryContainer>Summary</SummaryContainer>;
}
