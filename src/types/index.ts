export interface ITeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface ITeamMetaData {
  total_pages: number;
  current_page: number;
  next_page: null;
  per_page: number;
  total_count: number;
}

export interface IAllTeamsResponse {
  data: ITeam[];
  meta: ITeamMetaData;
}
