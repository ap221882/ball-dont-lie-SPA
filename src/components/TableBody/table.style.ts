import styled from 'styled-components';

export const StyledTable = styled.tr<{ showOverlay: boolean }>`
  &:hover {
    background-color: ${(props) =>
      props.showOverlay ? 'var(--grey-200)' : '#f5f5f5'};
  }
  th {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
