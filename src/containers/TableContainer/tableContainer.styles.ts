import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  table {
    margin-top: 3rem;
    height: 448px;
  }

  th {
    height: 4rem;
  }
  table > thead > tr > th {
    text-align: center;
    height: 4rem;
  }
  table > tbody > tr > th,
  td {
    text-align: center;
    height: 4rem;
  }
  table > tbody > tr > th,
  tr {
    text-align: center;
    height: 4rem;
  }
  thead {
    background-color: var(--primary-400);
    color: var(--white);
  }

  .sorting__icon {
  }
  .column__heading__container {
  }
`;

export const StyledPageNavigator = styled.section`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(4, auto);
  button {
    background-color: var(--primary-500);
    color: var(--white);
    margin: 2px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
  }
`;
