import styled, { keyframes, css } from 'styled-components';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Router, Link } from 'react-router-dom';


const translateLeft = keyframes`
	0%{
	}

	100%{
		transform: translateX(-50%);
	}
`;

const Background = styled.div`
	width:100%;
	height: 1000px;
	margin: 0;
	padding: 0;

	display: flex;
`;



const Section = styled.div`
	padding: 2rem;

	background-color: ${props => props.backgroundColor || "black"};
	color: ${props => props.color || "#f2f2f2"};


	${props => {
		return props.ttt && css`
				animation: ${translateLeft} 1s forwards;
			`;
	}
	}}
	
	
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



function App() {
	let [selectContent, setSelectContent] = useState(""); // 어떤 콘텐츠를 선택했는지 
	let [SectionProfile, setSectionProfile] = useState(<Section></Section>);
	
	
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
				<Background>
					<Section backgroundColor="#ef5d50" onClick={() => {selectContentHandler("profile")}}>
						{
							selectContent === "post"
							?
							null
							:
							<div>
								<h2> zzz </h2>
								<p>모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.</p>
							</div>
						}
							

					</Section>
					
					<Section backgroundColor="#2d2d2d" onClick={() => {selectContentHandler("post")}}>
						<h2> zzz </h2>
						<p>국가는 모성의 보호를 위하여 노력하여야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</p>

					</Section>
				</Background>
			</Container>
		</div>
	);
}

export default App;
