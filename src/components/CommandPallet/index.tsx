import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { commandPalletViewState } from "../../recoil/ui_states";
// @ts-ignore
import { ReactComponent as Search } from "../../assets/search.svg";

import styled from "styled-components";

const Container = styled.div`
  position: fixed;
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
  opacity: ${props => (props.visible ? 1 : 0)};
`;

const Row = styled.div`
  display: flex;
`;

const PalletFilter = styled.div`
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
  color: ${props => props.theme.palette.primary.contrastText};
  background-color: ${props =>
    props.active ? props.theme.background : "transparent"};

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

const CommandPallet = (): JSX.Element => {
  const visible = useRecoilValue(commandPalletViewState);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [command, setCommand] = useState("");

  useEffect(
    function() {
      if (command[0] === ">") {
        return setSelectedFilter("Commands");
      }
      if (command[0] === "@") {
        return setSelectedFilter("Files");
      }
      return setSelectedFilter("All");
    },
    [command]
  );

  const generateFilters = (): JSX.Element[] => {
    return ["All", "Files", "Commands"].map((filter, index) => {
      return (
        <PalletFilter
          onClick={() => setSelectedFilter(filter)}
          active={filter === selectedFilter}
          key={"filter" + index}
        >
          {filter}
        </PalletFilter>
      );
    });
  };

  return (
    <Container visible={visible}>
      <Row>{generateFilters()}</Row>
      <Row>
        <Search
          style={{
            backgroundColor: "#00000055",
            height: "25px",
            width: "25px",
            padding: "10px",
            fill: "#FFFFFFAA"
          }}
        />
        <Input
          type={"text"}
          autoFocus={true}
          onChange={e => setCommand(e.target.value)}
          value={command}
        />
      </Row>
      <Row>{/* TODO add filters here once available  */}</Row>
    </Container>
  );
};

export default CommandPallet;
