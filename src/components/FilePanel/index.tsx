import styled from "styled-components";

interface PanelProps {
  open: boolean;
}

const Container = styled.div`
  width: ${props => (props.open ? "300px" : "0px")};
  background-color: ${props => props.theme.backgroundAlt};
`;

const FilePanel = ({ open }: PanelProps): JSX.Element => {
  return <Container open={open}></Container>;
};

export default FilePanel;
