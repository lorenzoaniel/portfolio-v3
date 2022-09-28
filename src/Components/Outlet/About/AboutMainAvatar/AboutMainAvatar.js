import React from "react";
import styled from "styled-components";

const AboutMainAvatarContainer = styled.div`
	background-color: pink;
	justify-self: center;
	grid-area: avatarcontainer;
	width: calc(${(props) => props.dynamicsizeprop} * 3.6);
	height: calc(${(props) => props.dynamicsizeprop} * 3.6);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	/* flex-grow: 1; */
`;
const AboutMainAvatarImg = styled.img`
	background-color: orange;
	width: 90%;
	height: 90%;
	border-radius: 50%;
`;

function AboutMainAvatar(props) {
	const { imgsrcprop, imgaltprop, dynamicsizeprop } = props;

	return (
		<AboutMainAvatarContainer dynamicsizeprop={dynamicsizeprop}>
			<AboutMainAvatarImg src={imgsrcprop} alt={imgaltprop} />
		</AboutMainAvatarContainer>
	);
}

export default AboutMainAvatar;
