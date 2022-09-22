import React from "react";
import styled from "styled-components";

const AboutMainTitleContainer = styled.div`
	/* background-color: orange; */
	height: 90%;
	width: 90%;
	grid-area: maintitle;
	justify-self: center;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;

	padding-left: 1rem;
`;

const AboutMainTitleh1 = styled.h1`
	font-size: 2vh;
	color: var(--grey-outlet-maintitle);

	padding: 0.3rem;
	border-radius: 0.5rem;
	background-color: grey;
`;

const AboutMainTitleh3 = styled.h3`
	font-size: clamp(1vh, 1.5vh, 1.5vh);
	color: var(--grey-outlet-sectitle);

	padding: 0.3rem;
	border-radius: 0.5rem;
	background-color: lightgrey;
`;

function AboutMainTitle() {
	return (
		<AboutMainTitleContainer>
			<AboutMainTitleh1>{"Mikhail Lorenzo Aniel"}</AboutMainTitleh1>
			<AboutMainTitleh3>{"Front End Developer"}</AboutMainTitleh3>
		</AboutMainTitleContainer>
	);
}

export default AboutMainTitle;
