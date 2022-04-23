import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Sv, St, PreviewPixel } from "components";

interface CanvasPreviewProps {
  width: number;
  height: number;
  pixels: any;
  setPixels: any;
}

export const CanvasPreview: React.FC<CanvasPreviewProps> = ({
  width,
  height,
  pixels,
  setPixels,
}) => {
  const [pixelSize, setPixelSize] = useState(1);

  const repeatPixel = () => {
    setPixels([]);
    for (let i = 0; i < width * height; i++) {
      setPixels((prevPixels) => [...prevPixels, { index: i }]);
    }
  };

  useEffect(() => {
    repeatPixel();
  }, [width, height]);

  return (
    <S.PixelsContainer width={width} pixelSize={pixelSize}>
      {pixels.map((pixel, index) => {
        return (
          <PreviewPixel
            index={index}
            size={pixelSize}
            bgColor={pixel.bgColor}
          />
        );
      })}
    </S.PixelsContainer>
  );
};

const S: any = {};

S.PixelsContainer = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.width}, ${props.pixelSize}px)`};
  border: 1px solid black;
`;
