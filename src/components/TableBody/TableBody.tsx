import { ITeam } from '../../types';
import TableRow from './TableRow';

type ITableProps = {
  teamPageData: ITeam[];
  handleRowClick: (id: number) => void;
};

const TableBody = ({ teamPageData, handleRowClick }: ITableProps) => {
  return (
    <>
      <tbody>
        {teamPageData.map((team) => {
          return (
            <TableRow
              data={team}
              key={team.id}
              handleRowClick={handleRowClick}
            />
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
