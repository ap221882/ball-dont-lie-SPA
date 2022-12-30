import { useTranslation } from 'react-i18next';

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
      <div className="column__heading__container">
        <span>{title}</span>
        <span className="sorting__icon">
          {desc ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </span>
      </div>
    </th>
  );
};

const TableHead = () => {
  const { t } = useTranslation();
  const columns = useTableContext();
  const { handleSort } = useTableDispatchContext();

  return (
    <thead>
      <tr>
        {columns.map((item, index) => {
          return (
            <ColumnHeading
              key={item.id}
              title={t(`tableColumns.column${index + 1}`)}
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
