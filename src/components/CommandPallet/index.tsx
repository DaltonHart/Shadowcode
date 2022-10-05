import { useRecoilValue } from "recoil";
import { commandPalletViewState } from "../../recoil/ui_states";
// @ts-ignore
import { ReactComponent as Search } from "../../assets/search.svg";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  width: 40vw;
  height: min-content;
  background-color: ${props => props.theme.backgroundAlt};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -20%);
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  z-index: 20;
  outline: none;
`;

const Row = styled.div`
  display: flex;
`;

const PalletFilter = styled.div`
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  color: ${props => props.theme.palette.primary.contrastText};

  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const Input = styled.input`
  background-color: #00000055;
  width: 100%;
  padding: 5px;
  border: none;
  color: ${props => props.theme.palette.primary.contrastText};

  &:focus {
    outline: none;
  }
`;

export default (): JSX.Element => {
  const visible = useRecoilValue(commandPalletViewState);
  return visible ? (
    <Container>
      <Row>
        <PalletFilter>All</PalletFilter>
        <PalletFilter>Files</PalletFilter>
      </Row>
      <Row>
        <Search
          style={{
            backgroundColor: "#00000055",
            height: "20px",
            width: "20px",
            padding: "10px",
            fill: "#FFFFFFAA"
          }}
        />
        <Input type={"text"} autoFocus={true} />
      </Row>
    </Container>
  ) : (
    <></>
  );
};
