import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { sendNotification } from "@tauri-apps/api/notification";

import { Button, Header, CommandPallet, LeftBar } from "@components";
import { defaultTheme, monokaiTheme } from "./themes";
import hotkeyHandler from "./hotkeys";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.background};
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
  align-content: center;
`;

function App(): JSX.Element {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(function() {
    document.addEventListener("keydown", hotkeyHandler);

    return () => {
      document.removeEventListener("keydown", hotkeyHandler);
    };
  }, []);

  const handleThemeChange = () => {
    setTheme(monokaiTheme);
    sendNotification({ title: "Theme Updated!" });
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer className="App">
        <CommandPallet />
        <LeftBar />
        <div style={{ padding: "100px" }}>
          <Header text={"Welcome to Shadowcode"} />
          <Button
            label={"Click Me to change theme"}
            onClick={handleThemeChange}
          />
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
