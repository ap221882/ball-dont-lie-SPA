import { useReducer, useContext, createContext, Dispatch } from 'react';

import { useAppDispatch } from '../../../hooks/typesHooks';
import {
  sortAscendinglyBy,
  sortDescendinglyBy,
} from '../../../slices/teamSlice';
import { columnReducer, initialColumnState } from './tableContextReducer';
import {
  COLUMN_ACTIONTYPE,
  InitialColumnStateType,
  ITableContextProviderProps,
} from './tableContext.types';

type ITableDispatchContext = {
  reducerDispatch: Dispatch<COLUMN_ACTIONTYPE>;
  handleSort: (accessor: string, sort: string) => void;
};

const TableContext = createContext([] as InitialColumnStateType);
const TableDispatchContext = createContext({} as ITableDispatchContext);

const TableContextProvider = ({ children }: ITableContextProviderProps) => {
  const [columns, reducerDispatch] = useReducer(
    columnReducer,
    initialColumnState,
  );

  const dispatch = useAppDispatch();

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
    <TableDispatchContext.Provider value={{ reducerDispatch, handleSort }}>
      <TableContext.Provider value={columns}>{children}</TableContext.Provider>
    </TableDispatchContext.Provider>
  );
};

export default TableContextProvider;

export const useTableContext = () => useContext(TableContext);
export const useTableDispatchContext = () => useContext(TableDispatchContext);
