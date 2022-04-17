import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Pixel } from "components";

const Home: React.FC = () => {
  const [pixelSize, setPixelSize] = useState(10);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(10);

  const [pixels, setPixels] = useState([]);

  const repeatPixel = () => {
    for (let i = 0; i < width * height; i++) {
      setPixels((prevPixels) => [...prevPixels, { size: pixelSize }]);
    }
  };

  useEffect(() => {
    repeatPixel();
  }, [width]);

  useEffect(() => {
    console.log(pixels);
  }, [pixels]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#fafafa",
      }}
    >
      <Grid width={width}>
        {pixels.map((pixel, index) => {
          return <Pixel key={index} size={pixelSize} bgColor="pink" />;
        })}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.width}, 10px)`};
`;

export default Home;
