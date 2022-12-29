import axiosInstance from './axiosInstance';
import { IAllTeamsResponse, IGameDataResponse } from '../types';

/**
 * For getting list of all teams for the table data
 * @returns {Array} response array of all teams
 */
export const getAllTeams = (): Promise<IAllTeamsResponse> => {
  return axiosInstance.get('/api/v1/teams');
};

/**
 * For getting data of single team and a random game played by that team
 */
export const getGameData = (id: number): Promise<IGameDataResponse> => {
  return axiosInstance.get(`/api/v1/games?seasons[]=2021&team_ids[]=${id}`);
};
