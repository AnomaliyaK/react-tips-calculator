import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #ffffff;
  background: #2ed2c9;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { StyledButton };
