import styled from 'styled-components';
import { useEffect } from 'react';


const Container = styled.div`
	padding: 2rem;

	background-color: ${props => props.backgroundColor || "black"};
	color: ${props => props.color || "#f2f2f2"};
	
	
	h2{
		font-size: 4rem;	
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
	
	p {
		font-size: 1.5rem;
	}
`;


const Section = ( { backgroundColor, color, onClick, children, className } ) => {
	
	
	return (<Container className={className} backgroundColor={backgroundColor} onClick={onClick} >
		{children}
		</Container>);
}

export default Section;