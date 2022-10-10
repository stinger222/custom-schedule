import styled from "styled-components"; 

const StyledContainer = styled.div`
	max-width: 400px;
	margin: 0 auto;
	padding: 0 0.5em;
	
	@media (max-width: 360px) {
		& {
			font-size: 4.4vw;
		}
	}
	
	@media (min-width: 800px) {
		& {
			max-width: 600px;
		}
	}
`

export default StyledContainer