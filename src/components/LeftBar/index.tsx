import styled from "styled-components";
import { ReactComponent as Folder } from "@assets/folder.svg";
import { ReactComponent as Clipboard } from "@assets/clipboard.svg";

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
  //background-color: ${props => props.theme.background};
  
  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const LeftBar = (): JSX.Element => {
  const iconStyles = {
    width: "30px",
    height: "30px",
    transform: "rotate(90deg)",
    marginBottom: "5px"
  };

  return (
    <Container>
      <BarOption>
        <Folder style={iconStyles} />
        Files
      </BarOption>
      <BarOption>
        <Clipboard style={iconStyles} />
        Lesson
      </BarOption>
    </Container>
  );
};

export default LeftBar;
