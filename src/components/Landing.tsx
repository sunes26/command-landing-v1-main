import React from 'react';
import styled from 'styled-components';

type LandingProps = {
  src: string;
  description: string;
  title: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.625rem;
`;

const Image = styled.img`
  border-radius: 10px;
  border: 2px solid #ffffff;
  max-width: 534px;
  max-height: 370px;
  width: 100%;
  height: auto;
`;

const Description = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.063rem;
  color: #3f3f3f;
`;

const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 800;
`;

const Landing: React.FC<LandingProps> = (props: LandingProps) => {
  const { src, description, title } = props;

  return (
    <Container>
      <Image src={src} />
      <Description>{description}</Description>
      <Title>{title}</Title>
    </Container>
  );
};

export default Landing;
