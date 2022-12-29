import styled from 'styled-components';

export const StyledTable = styled.tr`
  &:hover {
    border: 1px solid red;
    background-color: #f5f5f5;
  }
  th {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
