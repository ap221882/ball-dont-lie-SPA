import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/typesHooks';
import { Table } from '../../components';
import { StyledTableContainer } from './tableContainer.styles';
import { getTeams } from '../../slices/teamSlice';
import TableHead from './TableHead';

type Props = {};

const TableContainer = (props: Props) => {
  const teams = useAppSelector((state) => state.teams.teams);
  const teamsStatus = useAppSelector((state) => state.teams.status);
  const teamsError = useAppSelector((state) => state.teams.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (teamsStatus === 'idle') {
      dispatch(getTeams());
    }
  }, [teamsStatus, dispatch]);

  if (teamsStatus === 'loading') {
    return <h2>Loading...</h2>;
  } else if (teamsStatus === 'failed') {
    return <h3>ERROR: {teamsError}</h3>;
  } else if (teamsStatus === 'succeeded') {
    console.log(teams, 'success teams');

    return (
      <StyledTableContainer>
        <TableHead />
        {teams.map((team) => {
          return <Table data={team} key={team.id} />;
        })}
      </StyledTableContainer>
    );
  } else {
    return null;
  }
};

export default TableContainer;
