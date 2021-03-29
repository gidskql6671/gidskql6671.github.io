import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
	${reset}
	
	body {
		font-family: 'Spoqa Han Sans Neo', 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		overflow-x: hidden;
	}

	html, body, div{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
	}

	a{
		color: white;
		text-decoration: none;

		&:hover {
			color: white;
			text-decoration: none;
		}
	}

`;

export default GlobalStyles;