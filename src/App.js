import './App.scss';
import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function App() {
	let [selectContent, setSelectContent] = useState(""); // 어떤 콘텐츠를 선택했는지 
	const [animated_props, set, stop] = useSpring(() => ({opacity: 1}))

	set({
		opacity: selectContent === 'post' ? 0 : 1
	});
	
	
	const selectContentHandler = (content) => {
		if (content === "profile"){
			setSelectContent("profile");
		}
		else if (content === "post"){
			setSelectContent("post");
		}
	};
	
	useEffect(() => {
		if (selectContent === ""){
			// 기본 화면
		}
		else if (selectContent === "profile"){
			// 프로필 화면
		}
		else if (selectContent === "post"){
			// post 화면
		}
		
	}, [selectContent]);
	
	return (
		<div className="App">
			<Container fluid className="p-0">
				<Row className="background-content">
					<Col id="content1" className="container-content" onClick={() => {selectContentHandler("profile")}}>
						<animated.div style={animated_props}>
							<h2> zzz </h2>
							<p>모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.</p>
						</animated.div>

					</Col>
					
					<Col id="content2" className="container-content" onClick={() => {selectContentHandler("post")}}>
						<h2> zzz </h2>
						<p>국가는 모성의 보호를 위하여 노력하여야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</p>

					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
