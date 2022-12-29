import axiosInstance from './axiosInstance';
import { IAllTeamsResponse } from '../types';

/**
 * For getting list of all teams for the table data
 * @returns {Array} response array of all teams
 */
export const getAllTeams = (): Promise<IAllTeamsResponse> => {
  return axiosInstance.get('/api/v1/teams');
};
