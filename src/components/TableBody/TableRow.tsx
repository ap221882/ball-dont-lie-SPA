import { useNavigate } from 'react-router-dom';
import { ITeam } from '../../types';

import { StyledTable } from './table.style';

type ITableRowProps = {
  data: ITeam;
};

const TableRow = ({
  data: { name, city, abbreviation, conference, division, id },
}: ITableRowProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${id}`);
  };
  return (
    <StyledTable onClick={handleNavigate}>
      <th>{name}</th>
      <td>{city}</td>
      <td>{abbreviation}</td>
      <td>{conference}</td>
      <td>{division}</td>
    </StyledTable>
  );
};

export default TableRow;
