import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Pixel } from "components";

const Home: React.FC = () => {
  const [pixelSize, setPixelSize] = useState(50);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const [pixels, setPixels] = useState([]);

  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);
  const [selectedColor, setSelectedColor] = useState("");

  const repeatPixel = () => {
    for (let i = 0; i < width * height; i++) {
      setPixels((prevPixels) => [...prevPixels, { size: pixelSize, index: i }]);
    }
  };

  const onClickPixel = (index: number, hex: string) => {
    // console.log(index, x, y, hex);
    // setColorInfo((prevColorInfo) => [...prevColorInfo, { index, x, y, hex }]);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#fafafa",
      }}
    >
      <span>가로 픽셀</span>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />
      <span>세로 픽셀</span>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />

      <Grid width={width} pixelSize={pixelSize}>
        {pixels.map((pixel, index) => {
          return (
            <Pixel
              onClick={() =>
                onClickPixel(
                  index,
                  // index % width,
                  // Math.floor(index / height),
                  selectedColor
                )
              }
              index={index}
              x={index % width}
              y={Math.floor(index / height)}
              size={pixelSize}
              bgColor={pixel.bgColor}
            />
          );
        })}
      </Grid>
      <span>선택한 색</span>
      <ColorButton color={selectedColor} />
      <span>파레트</span>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {colors.map((color, index) => {
          return (
            <ColorButton
              onClick={() => setSelectedColor(colors[index])}
              selected={selectedColor === color}
              // selected={index === selectedColor}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.width}, ${props.pixelSize}px)`};
`;

const ColorButton = styled.button`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  border: 1px solid black;
`;

export default Home;
