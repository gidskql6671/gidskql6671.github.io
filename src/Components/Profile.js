import styled from 'styled-components';


const Container = styled.div`
	text-align: center;
`;

const Header = styled.h1`
	font-size: 3rem;
	margin-bottom: 2rem;
`;

const Profile = () => {
	
	return (
		<Container>
			<Header> Profile </Header>
			<p> 뭐하지 이제... </p>
		</Container>
	);
}

export default Profile;