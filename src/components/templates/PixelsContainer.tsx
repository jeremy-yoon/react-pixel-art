import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useTable } from "react-table";

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

  useEffect(() => {
    console.log("pixels", pixels);
  }, [pixels]);

  //table
  const data = React.useMemo(() => pixels, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { rows, prepareRow } = useTable({ columns, data });

  return (
    <S.PixelsContainer appliedWidth={appliedWidth} pixelSize={pixelSize}>
      <table style={{ border: "solid 1px blue" }}>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {pixels.map((pixel, index) => {
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
      })} */}
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
