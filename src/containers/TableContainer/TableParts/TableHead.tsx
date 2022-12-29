import { TiArrowSortedUp, TiArrowSortedDown } from '../../../assets/icons';
import {
  useTableContext,
  useTableDispatchContext,
} from '../TableContext/TableContext';
import { IColumnHeadingProps } from './tableParts.type';

const ColumnHeading = ({
  title,
  accessor,
  sort,
  onClick,
}: IColumnHeadingProps) => {
  const desc = sort === 'desc';

  return (
    <th onClick={() => onClick?.(accessor, sort)}>
      <span>{title}</span>
      <span>{desc ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
    </th>
  );
};

const TableHead = () => {
  const columns = useTableContext();
  const { handleSort } = useTableDispatchContext();

  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <ColumnHeading
              key={item.id}
              title={item.title}
              onClick={handleSort}
              accessor={item.accessor}
              sort={item.sort}
            />
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
