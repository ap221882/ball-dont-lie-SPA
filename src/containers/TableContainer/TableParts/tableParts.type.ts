import { ITeam } from '../../../types';

export interface IColumnHeadingProps {
  title: string;
  desc?: boolean;
  accessor: string;
  sort: string;
  onClick: (accessor: string, sort: string) => void;
}

export interface ITableProps {
  teamPageData: ITeam[];
  currentPage: number;
}

export interface IPageNavigatorProps {
  currentPage: number;
}
