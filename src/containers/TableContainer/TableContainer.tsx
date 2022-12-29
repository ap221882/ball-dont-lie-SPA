import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/typesHooks';
import { Table } from '../../components';
import { StyledTableContainer } from './tableContainer.styles';
import { getTeams } from '../../slices/teamSlice';
import TableHead from './TableHead';
import PageNavigator from './PageNavigator';

type Props = {};

/**
 * * TABLE CONTAINER HAVING DYNAMIC DATA OF SEVEN ITEMS
 * * HAVE PAGINATION
 */
const TableContainer = (props: Props) => {
  const { pageItems: teamPageData, page: currentPage } = useAppSelector(
    (state) => state.teams.pageData,
  );
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
    return (
      <StyledTableContainer>
        <table>
          <TableHead />
          {teamPageData.map((team) => {
            return <Table data={team} key={team.id} />;
          })}
        </table>
        <PageNavigator currentPage={currentPage} />
      </StyledTableContainer>
    );
  } else {
    return null;
  }
};

export default TableContainer;
