import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllTeams } from '../services';
import { ITeam } from '../services';

interface ITeamsInitialState {
  teams: ITeam[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState = {
  teams: [],
  status: 'idle',
  error: null,
} as ITeamsInitialState;

export const getTeams = createAsyncThunk('teams/getTeams', async () => {
  try {
    const teams = await getAllTeams();
    return teams.data;
  } catch (err: unknown) {
    return (err as Error).message;
  }
});

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTeams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.teams = action.payload;
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message;
      });
  },
});
