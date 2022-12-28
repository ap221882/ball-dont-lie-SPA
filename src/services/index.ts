import axiosInstance from './axiosInstance';

interface ITeamMetaData {
  total_pages: number;
  current_page: number;
  next_page: null;
  per_page: number;
  total_count: number;
}

export interface ITeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

interface IAllTeamsResponse {
  data: ITeam[];
  meta: ITeamMetaData;
}

export const getAllTeams = (): Promise<IAllTeamsResponse> => {
  return axiosInstance.get('/api/v1/teams');
};
