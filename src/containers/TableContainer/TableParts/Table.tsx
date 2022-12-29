import TableHead from './TableHead';
import PageNavigator from './PageNavigator';
import { TableBody } from '../../../components';
import { ITableProps } from './tableParts.type';

const Table = ({ teamPageData, currentPage }: ITableProps) => {
  return (
    <>
      <table>
        <TableHead />
        <TableBody teamPageData={teamPageData} />
      </table>
      <PageNavigator currentPage={currentPage} />
    </>
  );
};

export default Table;
