import { ITeam } from '../../services';
import { StyledTable } from './table.style';
import TableBody from './TableBody';

type ITableProps = {
  data: ITeam;
};

const Table = ({ data }: ITableProps) => {
  return (
    <StyledTable>
      <TableBody data={data} />
    </StyledTable>
  );
};

export default Table;
