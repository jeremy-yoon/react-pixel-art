import React from "react";
import styled from "styled-components";

interface PixelProps {
  onClick: Function;
  size: number;
  bgColor: string;
  index: number;
  x: number;
  y: number;
}

export const Pixel: React.FC<PixelProps> = ({
  onClick,
  size,
  bgColor,
  index,
  x,
  y,
}) => {
  return (
    <Container size={size} bgColor={bgColor} onClick={onClick && onClick}>
      {/* <div style={{ color: "gray" }}>{index}</div> */}
      <div>
        {x},{y}
      </div>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid black;
`;
