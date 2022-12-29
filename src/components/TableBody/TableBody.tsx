import { ITeam } from '../../types';
import TableRow from './TableRow';

type ITableProps = {
  teamPageData: ITeam[];
};

const TableBody = ({ teamPageData }: ITableProps) => {
  return (
    <>
      <tbody>
        {teamPageData.map((team) => {
          return <TableRow data={team} key={team.id} />;
        })}
      </tbody>
    </>
  );
};

export default TableBody;
