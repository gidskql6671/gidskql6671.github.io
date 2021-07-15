import "../css/Frame.css";


const Frame = ({children, id}) => {
	
	return (
		<div className="frame" id={id}>
			<div>
				{children}
			</div>
		</div>
	);
}

export default Frame;