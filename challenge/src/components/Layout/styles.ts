import styled from 'styled-components';

/**
 * Layout
 * MH = Main Header 
 * CT = Content
 */

export const TestGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 65px auto;

  grid-template-areas: 
  'MH'
  'CT';

  height: 100vh;
`;
