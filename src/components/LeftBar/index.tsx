import { useState, useEffect } from "react";

import styled from "styled-components";
import { ReactComponent as Folder } from "@assets/folder.svg";
import { ReactComponent as Clipboard } from "@assets/clipboard.svg";
import FilePanel from "../FilePanel";

const Container = styled.div`
  height: 100%;
  background-color: ${props => props.theme.backgroundAlt};
  border-right: 1px solid ${props => props.theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const BarOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: ${props => props.theme.palette.primary.contrastText};
  cursor: pointer;
  background-color: ${props =>
    props.name === props.active ? props.theme.background : "inherits"};

  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const LeftBar = (): JSX.Element => {
  const [active, setActive] = useState("Files");

  const iconStyles = {
    width: "30px",
    height: "30px",
    transform: "rotate(90deg)",
    marginBottom: "5px"
  };

  return (
    <>
      <Container>
        <BarOption
          name={"Files"}
          active={active}
          onClick={() => setActive("Files")}
        >
          <Folder style={iconStyles} />
          Files
        </BarOption>
        <BarOption name={"Lesson"} onClick={() => setActive("Lesson")}>
          <Clipboard style={iconStyles} />
          Lesson
        </BarOption>
      </Container>
      <FilePanel open={active === "Files"} />
    </>
  );
};

export default LeftBar;
