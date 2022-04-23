import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ReactPixelArtCanvas } from "components";

const Home: React.FC = () => {
  return (
    <S.Container>
      <ReactPixelArtCanvas />
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.div`
  display: flex;
  padding-top: 40px;
`;

export default Home;
