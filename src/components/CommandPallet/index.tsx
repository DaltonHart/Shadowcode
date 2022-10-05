import { useRecoilValue } from "recoil";
import { commandPalletViewState } from "../../recoil/ui_states";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40vw;
  height: min-content;
  background-color: ${props => props.theme.backgroundAlt};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

// TODO finish pallet

const Input = styled.input`
  background-color: #000000;
`;

export default (): JSX.Element => {
  const visible = useRecoilValue(commandPalletViewState);
  return visible ? (
    <Container>
      <Input type={"text"} placeholder={"Search"} />
    </Container>
  ) : (
    <></>
  );
};
