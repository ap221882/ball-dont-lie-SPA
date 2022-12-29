import { ReactElement, Dispatch } from 'react';

export interface ITableContextProviderProps {
  children: ReactElement;
}

export type COLUMN_ACTIONTYPE =
  | { type: 'sort_asc'; payload: string }
  | { type: 'sort_desc'; payload: string };

export type InitialColumnStateType = {
  id: number;
  title: string;
  accessor: string;
  sort: string;
}[];

export interface ITableDispatchContext {
  reducerDispatch: Dispatch<COLUMN_ACTIONTYPE>;
  handleSort: (accessor: string, sort: string) => void;
}
