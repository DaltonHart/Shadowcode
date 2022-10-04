import styled from "styled-components";

interface HeaderProps {
  text: string;
}

const StyledHeader = styled.header`
  color: ${props => props.theme.palette.primary.main};
  font-size: 30px;
  margin: 10px;
`;

export default ({ text }: HeaderProps): JSX.Element => {
  return <StyledHeader>{text}</StyledHeader>;
};
