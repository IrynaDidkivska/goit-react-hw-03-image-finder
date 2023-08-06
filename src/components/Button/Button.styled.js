import { styled } from 'styled-components';

export const StyledButton = styled.button`
  max-width: 100px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear;
  color: #616161;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #64b5f6;
    color: #37474f;
  }
`;
