import { useEffect } from 'react';

import { getAllTeams } from '../../services';
import { Table } from '../../components';
import { StyledTableContainer } from './tableContainer.styles';

type Props = {};

const TableContainer = (props: Props) => {
  useEffect(() => {
    (async () => {
      const teams = await getAllTeams();
      console.log(teams, 'teams');
    })();
  }, []);

  return (
    <StyledTableContainer>
      <Table />
    </StyledTableContainer>
  );
};

export default TableContainer;
