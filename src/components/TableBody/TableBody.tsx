import { ITeam } from '../../types';
import { StyledTable } from './table.style';

type ITableProps = {
  data: ITeam;
};

const Table = ({
  data: { name, city, abbreviation, conference, division },
}: ITableProps) => {
  return (
    <StyledTable>
      <tr>
        <th>{name}</th>
        <td>{city}</td>
        <td>{abbreviation}</td>
        <td>{conference}</td>
        <td>{division}</td>
      </tr>
    </StyledTable>
  );
};

export default Table;
