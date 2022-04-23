import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Sv, St, Pixel } from "components";

export const ReactPixelArtCanvas: React.FC = () => {
  const [pixelSize, setPixelSize] = useState(50);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const [pixels, setPixels] = useState([]);

  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);
  const [selectedColor, setSelectedColor] = useState("");

  const repeatPixel = () => {
    setPixels([]);
    for (let i = 0; i < width * height; i++) {
      setPixels((prevPixels) => [...prevPixels, { size: pixelSize, index: i }]);
    }
  };

  const onClickPixel = (index: number, hex: string) => {
    if (pixels.find((pixel) => pixel.index === index)) {
      setPixels((prevPixels) =>
        prevPixels.map((pixel) => {
          if (pixel.index === index) {
            return { ...pixel, bgColor: hex };
          }
          return pixel;
        })
      );
    }
  };

  useEffect(() => {
    repeatPixel();
  }, []);

  return (
    <Sv col>
      <St text="가로 픽셀" />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />
      <St text="세로 픽셀" />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <S.ApplyButton onClick={repeatPixel}>적용</S.ApplyButton>

      <S.PixelsContainer width={width} pixelSize={pixelSize}>
        {pixels.map((pixel, index) => {
          return (
            <Pixel
              onClick={() => onClickPixel(index, selectedColor)}
              index={index}
              x={index % width}
              y={Math.floor(index / width)}
              size={pixelSize}
              bgColor={pixel.bgColor}
            />
          );
        })}
      </S.PixelsContainer>
      <St text="선택한 색" mt={16} />
      <S.ColorButton color={selectedColor} />
      <St text="파레트" mt={16} />
      <Sv row>
        {colors.map((color, index) => {
          return (
            <S.ColorButton
              onClick={() => setSelectedColor(colors[index])}
              selected={selectedColor === color}
              color={color}
            />
          );
        })}
      </Sv>
    </Sv>
  );
};

const S: any = {};

S.PixelsContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.width}, ${props.pixelSize}px)`};
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

S.ColorButton = styled.button`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  border: 1px solid black;
`;

S.ApplyButton = styled.button`
  margin: 16px 0;
  width: 80px;
  height: 40px;
`;
