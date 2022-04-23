import React from "react";
import styled from "styled-components";
import { Sv, St } from "components";

interface PixelProps {
  size: number;
  bgColor: string;
  index: number;
}

export const PreviewPixel: React.FC<PixelProps> = ({
  size,
  bgColor,
  index,
}) => {
  return <S.Container size={size} bgColor={bgColor}></S.Container>;
};

const S: any = {};

S.Container = styled.div`
  -webkit-user-select: none;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.bgColor};
`;
