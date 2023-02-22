import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin-top: 150px;
`;
const InputGroup = styled.div`
  display: grid;
  grid-gap: 15px;
`;
const Title = styled.h2`
  justify-self: center;
  font-size: 40px;
  line-height: 58px;
  letter-spacing: -0.3px;
  color: #000000;
  @media (max-width: 769px) {
    font-size: 24px;
    line-height: 35px;
  }
`;
const Subtitle = styled.h6`
  justify-self: center;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 769px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Total = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #000000;
  @media (max-width: 391px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const Button = styled.button`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #ffffff;
  background: #2ed2c9;
`;

export { StyledForm, Title, Subtitle, Total, InputGroup, Button };
