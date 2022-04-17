import React from "react";
import styled from "styled-components";

interface PixelProps {
  size: number;
  bgColor: string;
}

export const Pixel: React.FC<PixelProps> = ({ size, bgColor = "pink" }) => {
  return <Container size={size} bgColor={bgColor}></Container>;
};

const Container = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid black;
`;
