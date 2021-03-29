import styled, { css } from 'styled-components';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';

import Section from './Components/Section';
import Profile from './Components/Profile';
import Post from './Components/Post';


const Background = styled.div`
	width: 100%;
	height: 1000px;
	margin: 0;
	padding: 0;

	display: flex;
`;

const FluidDiv = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`;

// const HidingSectionLeft = keyframes`
// 	0%{
// 		text-align: right;
// 		width: 90%;
// 	}

// 	100%{
// 		text-align: center;
// 		width: 10%;
// 	}

// `;

const SectionLeft = styled(Section)`
	transition: width 1s;
	
${props => props.hide 
? css`
	width: 10%; 
	text-align: center; 
	padding-left: 1rem; 
	padding-right: 1rem;
`
: css`
	width: 90%;
` 
}
	
	
`;

const SectionRight = styled(Section)`
	transition: width 1s;
	
${props => props.hide 
? css`
	width: 10%; 
	text-align: center; 
	padding-left: 1rem; 
	padding-right: 1rem;
`
: css`
	width: 90%;
` 
}
`;


const App = ( { location } ) => {
	let [toggleProfile, setToggleProfile] = useState(true); 
	let [togglePost, setTogglePost] = useState(true);
	
	
	const selectContentHandler = (content) => {
		if (content === "profile"){
			setToggleProfile(true);
			setTogglePost(false);
		}
		else if (content === "post"){
			setToggleProfile(false);
			setTogglePost(true);
		}
	};
	
	useEffect(() => {		
		if (location.pathname === "/profile"){
			setToggleProfile(true);
			setTogglePost(false);
		}
		else if (location.pathname === "/post"){
			setToggleProfile(false);
			setTogglePost(true);
		}
		
	}, [location]);
	
	// aa
	
	return (
		<div className="App">
			<Container fluid className="p-0">
				<Background>
					
						<SectionLeft hide={!toggleProfile} backgroundColor="#ef5d50" onClick={() => {selectContentHandler("profile")}}>
							<Link to="/profile">
								<FluidDiv>
								{
									toggleProfile
									?
									<Switch>
										<Route exact path="/" component={Profile} />
										<Route exact path="/profile" component={Profile} />
										<Redirect from="/profile" to="/profile" />
									</Switch>
									:
									<div>
										<p> Profile </p>
									</div>
								}
								</FluidDiv>
							</Link>
						</SectionLeft>
					
						<SectionRight hide={!togglePost} backgroundColor="#2d2d2d" onClick={() => {selectContentHandler("post")}}>
							<Link to="/post">
								<FluidDiv>
								{
									togglePost
									?
									<Switch>
										<Route exact path="/" component={Post} />
										<Route exact path="/post" component={Post} />
										<Redirect from="/post" to="/post" />
									</Switch>
									:
									<div>
										<p> posts </p>
									</div>
								}
								</FluidDiv>
							</Link>
						</SectionRight>
				</Background>
			</Container>
		</div>
	);
}

export default withRouter(App);
