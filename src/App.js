import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';





const App = ( { location } ) => {
	let [toggleProfile, setToggleProfile] = useState(true); 
	
	useEffect(() => {
		
	}, [location]);
	
	
	return (
		<div className="App">
			<Container fluid className="p-0">
			</Container>
		</div>
	);
}

export default withRouter(App);
