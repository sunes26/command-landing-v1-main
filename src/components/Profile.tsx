import React from 'react';
import styled from 'styled-components';

type ProfileProps = {
  name: string;
  image: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 30px;
  margin-bottom: 1rem;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const { name, image } = props;
  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Profile;
