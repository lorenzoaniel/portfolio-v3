import { css } from "styled-components";

export const contactFormInputDynamicInputBaseStyle = css`
	border-radius: 1rem;
	height: 40%;
	width: 80%;
	padding: 1vw;
	border: 0.5rem solid var(--grey-contact-form-border-input);
	box-shadow: var(--grey-contact-form-border-input);
	font-size: clamp(1.5rem, 1.5vw, 2vw);
`;
