import React from 'react';
import styled from 'styled-components';

type FlipCardProps = {
  textFront: React.ReactNode;
  textBack: string;
  link: string;
  color: string;
};

const Card = styled.div`
  transform-style: preserve-3d;
  perspective: 720px;
  transition: all 0.5s ease;
  max-width: 540px;
  max-height: 360px;
  width: 100%;
  height: 100%;
  margin: 3rem;
  cursor: pointer;

  &:hover .card-front {
    transform: rotateX(-180deg);
  }

  &:hover .card-back {
    transform: rotateX(0deg);
  }
`;

const Front = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #ffffff30;
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: all 0.5s ease;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
`;

const Back = styled.div<{ color: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  transition: all 0.5s ease;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${({ color }: { color: string }) => color}70;
  color: #ffffff;
`;

const FlipCard: React.FC<FlipCardProps> = (props: FlipCardProps) => {
  const {
    textFront, textBack, link, color,
  } = props;

  return (
    <Card>
      <Front className="card-front">{textFront}</Front>
      <Back
        className="card-back"
        color={color}
        onClick={() => {
          document.location.href = link;
        }}
      >
        {textBack}
      </Back>
    </Card>
  );
};

export default FlipCard;
