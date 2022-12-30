import { ITeam } from '../types';

export interface ITeamsInitialState {
  teams: ITeam[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  pageData: {
    pageItems: ITeam[];
    page: number;
    pageSize: number;
  };
  filteredTeams: ITeam[];
}

export interface IOverlayInitialState {
  showOverlay: boolean;
  overlay: string;
  data: Record<string, any> | null;
}
