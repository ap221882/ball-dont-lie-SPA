import { ITeam } from '../../types';
import { StyledTable } from './table.style';
import { useAppSelector } from '../../hooks/typesHooks';

type ITableRowProps = {
  data: ITeam;
  handleRowClick: (id: number) => void;
};

const TableRow = ({
  data: { name, city, abbreviation, conference, division, id },
  handleRowClick,
}: ITableRowProps) => {
  const showOverlay = useAppSelector((state) => state.overlay.showOverlay);
  return (
    <StyledTable onClick={() => handleRowClick(id)} showOverlay={showOverlay}>
      <th>{name}</th>
      <td>{city}</td>
      <td>{abbreviation}</td>
      <td>{conference}</td>
      <td>{division}</td>
    </StyledTable>
  );
};

export default TableRow;
