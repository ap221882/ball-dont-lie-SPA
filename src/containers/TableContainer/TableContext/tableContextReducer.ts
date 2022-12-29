type COLUMN_ACTIONTYPE =
  | { type: 'sort_asc'; payload: string }
  | { type: 'sort_desc'; payload: string };

type InitialColumnStateType = {
  id: number;
  title: string;
  accessor: string;
  sort: string;
}[];

export const columnReducer = (
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

export const initialColumnState: InitialColumnStateType = [
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
