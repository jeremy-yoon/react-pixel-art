import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { Sv, St, PixelsContainer, CanvasPreview } from "components";

interface ColorButtonProps {}

const ColorButton: React.FC<ColorButtonProps> = ({}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);
  return (
    <>
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
    </>
  );
};

const ReactPixelArtCanvas: React.FC = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const [appliedWidth, setAppliedWidth] = useState(10);
  const [appliedHeight, setAppliedHeight] = useState(10);

  const [pixels, setPixels] = useState([]);

  const [selectedColor, setSelectedColor] = useState("red");

  // const applyWidthAndHeight = () => {
  //   setAppliedWidth(width);
  //   setAppliedHeight(height);
  //   repeatPixel();
  // };

  // useEffect(() => {
  //   if (appliedWidth === width && appliedHeight === height) {
  //     repeatPixel();
  //   }
  // }, [appliedWidth, appliedHeight]);

  // useEffect(() => {
  //   console.log(pixels);
  // }, [pixels]);

  return (
    <>
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
        {/* <S.ApplyButton onClick={applyWidthAndHeight}>적용</S.ApplyButton> */}

        <PixelsContainer
          appliedWidth={appliedWidth}
          appliedHeight={appliedHeight}
          selectedColor={selectedColor}
          pixels={pixels}
          setPixels={setPixels}
        />

        <ColorButton />
      </Sv>
      {/* <CanvasPreview
        width={width}
        height={height}
        pixels={pixels}
        setPixels={setPixels}
      /> */}
    </>
  );
};

const S: any = {};

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

export default React.memo(ReactPixelArtCanvas);
