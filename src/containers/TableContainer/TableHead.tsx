import { useReducer } from 'react';
import { TiArrowSortedUp, TiArrowSortedDown } from '../../assets/icons';
import { sortAscendinglyBy, sortDescendinglyBy } from '../../slices/teamSlice';
import { useAppDispatch } from '../../hooks/typesHooks';

interface IColumnHeadingProps {
  title: string;
  desc?: boolean;
  accessor: string;
  sort: string;
  onClick: (accessor: string, sort: string) => void;
}

type InitialColumnStateType = {
  id: number;
  title: string;
  accessor: string;
  sort: string;
}[];

type COLUMN_ACTIONTYPE =
  | { type: 'sort_asc'; payload: string }
  | { type: 'sort_desc'; payload: string };

const initialColumnState: InitialColumnStateType = [
  {
    id: 1,
    title: 'Team Name',
    accessor: 'name',
    sort: 'asc',
  },
  {
    id: 2,
    title: 'City',
    accessor: 'city',
    sort: 'asc',
  },
  {
    id: 3,
    title: 'Abbreviation',
    accessor: 'abbreviation',
    sort: 'asc',
  },
  {
    id: 4,
    title: 'Conference',
    accessor: 'conference',
    sort: 'asc',
  },
  {
    id: 5,
    title: 'Division',
    accessor: 'division',
    sort: 'asc',
  },
];

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

const columnReducer = (
  state: InitialColumnStateType,
  action: COLUMN_ACTIONTYPE,
) => {
  switch (action.type) {
    case 'sort_asc':
      return state.map((column) => {
        if (column.accessor === action.payload) {
          return { ...column, sort: 'desc' };
        } else {
          return { ...column, sort: 'asc' };
        }
      });
    case 'sort_desc':
      return state.map((column) => {
        return { ...column, sort: 'asc' };
      });
    default:
      throw new Error(`Unknown action type`);
  }
};

const TableHead = () => {
  const [columns, reducerDispatch] = useReducer(
    columnReducer,
    initialColumnState,
  );
  const dispatch = useAppDispatch();

  return (
    <thead>
      <tr>
        {columns.map((item) => {
          const handleSort = (accessor: string, sort: string) => {
            if (sort === 'asc') {
              reducerDispatch({ type: 'sort_asc', payload: accessor });
              dispatch(sortAscendinglyBy({ field: accessor }));
            } else if (sort === 'desc') {
              reducerDispatch({ type: 'sort_desc', payload: accessor });
              dispatch(sortDescendinglyBy({ field: accessor }));
            }
          };
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
