import styled from 'styled-components';


const Container = styled.div`
	text-align: center;
`;

const Header = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const Post = () => {
	
	return (
		<Container>
			<Header> Post </Header>
			<p> asd </p>
		</Container>
	);
}

export default Post;