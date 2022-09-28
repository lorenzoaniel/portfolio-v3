import React from "react";
import styled from "styled-components";
import AboutMainAvatar from "../../../Components/Outlet/About/AboutMainAvatar/AboutMainAvatar";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";

const SummaryContainer = styled.div`
	${AboutOutletBaseStyle};
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: "avatarcontainer" "summaryintroduction";
	align-items: center;
`;

const SummaryIntroductionContainer = styled.div`
	width: 95%;
	height: 100%;
	justify-self: center;
	grid-area: summaryintroduction;
	display: flex;
	justify-content: space-around;
	align-items: center;
	overflow-wrap: break-word;
	padding: 0.5vw;
`;

const SummaryIntroductionSpan = styled.span`
	font-size: clamp(1rem, 0.7319rem + 1.1594vw, 2.5rem);
`;

export default function Summary(props) {
	const { summaryprop, avatarsrcprop, avataraltprop, dynamicsizeprop } = props;
	return (
		<SummaryContainer>
			<AboutMainAvatar
				imgsrcprop={avatarsrcprop}
				imgaltprop={avataraltprop}
				dynamicsizeprop={dynamicsizeprop}
			/>
			<SummaryIntroductionContainer>
				<SummaryIntroductionSpan dynamicsizeprop={dynamicsizeprop}>
					{summaryprop}
				</SummaryIntroductionSpan>
			</SummaryIntroductionContainer>
		</SummaryContainer>
	);
}
