import styled from 'styled-components';
import image from './assets/image.png';

export const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: #eaf2f2;
  background: top left no-repeat url(${image}) #eaf2f2;
`;
