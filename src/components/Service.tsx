import React from 'react';
import styled from 'styled-components';

type ServiceProps = {
  src: string;
  description: string;
  title: string;
};

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ffffff90;
  padding: 2.5rem 3.75rem;
  border: 1px solid #f2f2f2;
  margin-bottom: 1.875rem;
`;

const Image = styled.img`
  width: 58px;
  height: 58px;
  margin-right: 1.25rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Description = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 800;
`;

const Service: React.FC<ServiceProps> = (props: ServiceProps) => {
  const { src, description, title } = props;

  return (
    <Container>
      <Image src={src} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Container>
  );
};

export default Service;
