import { useNavigate } from 'react-router-dom';
import { showOverlay } from '../../../slices/overlaySlice';
import { useAppDispatch } from '../../../hooks/typesHooks';
import TableHead from './TableHead';
import PageNavigator from './PageNavigator';
import { TableBody } from '../../../components';
import { ITableProps } from './tableParts.type';

const Table = ({ teamPageData, currentPage }: ITableProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    dispatch(showOverlay({ data: {}, overlay: 'Drawer' }));
    navigate(`/${id}`);
  };

  return (
    <>
      <table>
        <TableHead />
        <TableBody
          teamPageData={teamPageData}
          handleRowClick={handleRowClick}
        />
      </table>
      <PageNavigator currentPage={currentPage} />
    </>
  );
};

export default Table;
