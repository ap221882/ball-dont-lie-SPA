import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/typesHooks';
import { StyledTableContainer } from './tableContainer.styles';
import { getTeams } from '../../slices/teamSlice';
import Table from './TableParts/Table';
import TableContext from './TableContext/TableContext';

/**
 * * TABLE CONTAINER HAVING DYNAMIC DATA OF SEVEN ITEMS
 * * ---- HAVE PAGINATION
 */
const TableContainer = () => {
  const teams = useAppSelector((state) => state.teams);
  const { pageItems: teamPageData, page: currentPage } = teams.pageData;
  const teamsStatus = teams.status;
  const teamsError = teams.error;

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
      <TableContext>
        <StyledTableContainer>
          <Table teamPageData={teamPageData} currentPage={currentPage} />
        </StyledTableContainer>
      </TableContext>
    );
  } else {
    return <p>Some unwanted error occured!</p>;
  }
};

export default TableContainer;
