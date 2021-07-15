import './css/App.css';

import Frame from './Components/Frame';
import { useEffect } from 'react';

const App = ( ) => {
	let x, left, down = false;
	
	const listenerMousedown = e => {
		e.preventDefault();
		down = true;
		x = e.pageX;
		left = document.getElementById("screen").scrollLeft;
	}
	
	
	const listenerMouseup = e => {
		down = false;
		let newX = e.pageX;
		
		console.log(window.innerWidth, x, newX);
		
		if (Math.abs(newX - x) > window.innerWidth / 4){
			const screen = document.getElementById("screen");
			if (newX - x > 0){
				screen.scrollTo({
					left: screen.scrollLeft - window.innerWidth, 
					top: 0,
					behavior: 'smooth'
				});
			}
			else{
				screen.scrollTo({
					left: screen.scrollLeft + window.innerWidth, 
					top: 0,
					behavior: 'smooth'
				});
			}
		}
	}
	
	useEffect(() => {
		window.addEventListener("mousedown", listenerMousedown);
		window.addEventListener("mouseup", listenerMouseup);
		
		return () => {
			window.removeEventListener("mousedown");
			window.removeEventListener("mouseup");
		}
	})
	
	return (
		<div className="App" id="screen">
			<Frame>
				<h1> 안녕 </h1>
				<p> asd </p>
			</Frame>
			<Frame >
				<h1> 안녕2 </h1>
				<p> asd </p>
			</Frame>
			
			<Frame>
				<h1> 안녕3 </h1>
				<p> asd </p>
			</Frame>
		</div>
	);
}

export default App;
