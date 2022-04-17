import "antd/dist/antd.css";
import { StyledThemeProvider } from "definitions/styled-components";
import { RecoilRoot } from "recoil";

import Home from "pages";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <RecoilRoot>
        <div className="App">
          <Home />
        </div>
      </RecoilRoot>
    </StyledThemeProvider>
  );
}

export default App;
