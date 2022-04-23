import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { Sv, St, Pixel } from "components";

interface PixelsContainerProps {
  appliedWidth: number;
  appliedHeight: number;
  selectedColor: string;
  pixels: any;
  setPixels: any;
}

const PixelsContainer: React.FC<PixelsContainerProps> = ({
  appliedWidth,
  appliedHeight,
  selectedColor,
  // pixels,
  // setPixels,
}) => {
  const [pixelSize, setPixelSize] = useState(20);
  const [pixels, setPixels] = useState([]);

  const repeatPixel = () => {
    setPixels([]);
    for (let i = 0; i < 100 * 100; i++) {
      setPixels((prevPixels) => [...prevPixels, { index: i }]);
    }
  };

  const onClickPixel = (index: number, hex: string) => {
    let newPixels = [...pixels];
    newPixels[index].bgColor = hex;
    setPixels(newPixels);
  };

  useEffect(() => {
    repeatPixel();
  }, []);

  return (
    <S.PixelsContainer appliedWidth={appliedWidth} pixelSize={pixelSize}>
      {pixels.map((pixel, index) => {
        return (
          <Pixel
            key={uuid()}
            onClick={() => onClickPixel(index, selectedColor)}
            index={index}
            x={index % appliedWidth}
            y={Math.floor(index / appliedWidth)}
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
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.appliedWidth}, ${props.pixelSize}px)`};
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

export default PixelsContainer;
