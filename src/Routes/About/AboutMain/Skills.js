import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div``;

function Skills(props) {
	const { children } = props;
	return <SkillsContainer>{children}</SkillsContainer>;
}

export default Skills;
