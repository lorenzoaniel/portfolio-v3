import { css } from "styled-components";

export const appLayoutStyle = css`
	height: inherit;
	width: inherit;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: min-content minmax(min-content, 1fr);
	grid-template-areas: "navbar" "outlet";
`;
