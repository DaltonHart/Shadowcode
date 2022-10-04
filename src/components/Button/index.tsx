import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledButton = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.contrastText};
  padding: 10px;
  border: 1px solid transparent;
  margin: 10px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: filter .3s ease-in-out;
  &:hover {
    filter: brightness(115%);
  }
`

export default ({ label, onClick }:ButtonProps):JSX.Element => {
  return <StyledButton onClick={onClick}>
    {label}
  </StyledButton>
}