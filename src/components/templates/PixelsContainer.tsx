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

  //table
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <S.PixelsContainer appliedWidth={appliedWidth} pixelSize={pixelSize}>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
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
