import styled from "styled-components";

export const StyledLessonCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 1em;
	box-shadow: 0px 0.125em 0.3125em 0.0625em #00000040;

	width: 29.5em;
	height: fit-content;
	min-height: 7.8em;
	padding: 1.2em 0.8em 1em 0.8em;
	
	font-size: 1em;
	letter-spacing: -0.025em;

	h1 {
		margin-bottom: 1em;

		line-height: 1.25em;
		font-weight: 600;
		font-size: 1.625em;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& footer {
		display: flex;
		justify-content: space-between;

		font-family: Inter;
		font-weight: 500;
		font-size: 1.2em;
		line-height: 1em;
		letter-spacing: 0;
		color: #8B8B8B;
	}

	& footer span:nth-child(1) {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	& footer span:nth-child(2) {
		flex-shrink: 0;
		margin-left: 0.5em;
	}
`