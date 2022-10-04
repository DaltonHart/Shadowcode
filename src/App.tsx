import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { sendNotification } from "@tauri-apps/api/notification";

import { Button, Header } from "./components";
import { defaultTheme, monokaiTheme } from "./themes";

import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.background};
  height: 100%;
  display: grid;
  align-content: center;
`;

function App(): JSX.Element {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = () => {
    setTheme(monokaiTheme);
    sendNotification({ title: "Theme Updated!" });
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer className="App">
        <Header text={"Welcome to Shadowcode"} />
        <Button
          label={"Click Me to change theme"}
          onClick={handleThemeChange}
        />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
