import styled from "styled-components";

export const StyledDropdown = styled.div`
	--dropdown-font-size: 1.1;
	--dropdown-margin-top: 1em;
	
	font-size: calc(1em * var(--dropdown-font-size));
  font-family: 'JetBrains Mono';
  user-select: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
	height: fit-content;
	width: max-content;
	min-width: 17em;
  padding: 0.4em 0.8em;
	background: white;
  
	border-radius: 1em;
	box-shadow: 0 0 0 0.08em black, -0.2em 0.3em 0.5em rgb(0 0 0 / 30%);
  
	position: absolute;
	right: 1em;
  
	/* now even when dropdown font-size will be changed,
	it's position relative to header will be the same */
	top: calc(1 / var(--dropdown-font-size) * var(--header-height) + var(--dropdown-margin-top));
  
  & header {
    width: 100%;
    height: 1.5em;

    font-weight: 400;
    font-size: 1.4em;
    text-align: center;
    
    margin-bottom: 0.5em;
    border-bottom: 0.09em solid #bfbfbf;
  }
  
  & button {
		/* TODO: Make buttons bigger on mobile */
    margin-bottom: 0.3em;
    width: 100%;
		min-height: 1.5em;
    font-family: inherit;
    font-size: 1.2em;
    font-weight: 300;
  }

  & *:has(button) {
    width: 100%;
  }
`