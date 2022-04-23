import React from "react";
import styled from "styled-components";
import { Sv, St } from "components";

interface PixelProps {
  onClick: Function;
  size: number;
  bgColor: string;
  index: number;
  x: number;
  y: number;
  key: any;
}

const Pixel: React.FC<PixelProps> = ({
  onClick,
  size,
  bgColor,
  index,
  x,
  y,
  key,
}) => {
  return (
    <S.Container
      key={key}
      size={size}
      bgColor={bgColor}
      onClick={onClick && onClick}
    ></S.Container>
  );
};
const S: any = {};

S.Container = styled.div`
  -webkit-user-select: none;
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.bgColor};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;

export default React.memo(Pixel);
