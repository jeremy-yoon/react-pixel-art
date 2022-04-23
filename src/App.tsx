import "antd/dist/antd.css";
import { StyledThemeProvider } from "definitions/styled-components";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

import Home from "pages";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <RecoilRoot>
        <S.Container>
          <Home />
        </S.Container>
      </RecoilRoot>
    </StyledThemeProvider>
  );
}

const S: any = {};

S.Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default App;
