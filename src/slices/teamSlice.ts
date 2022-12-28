import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllTeams } from '../services';
import { ITeam } from '../services';

interface ITeamsInitialState {
  teams: ITeam[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  pageData: {
    pageItems: ITeam[];
    page: number;
    pageSize: number;
  };
}

const initialState = {
  teams: [],
  status: 'idle',
  error: null,
  pageData: {
    pageItems: [],
    page: 1,
    pageSize: 7,
  },
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
  reducers: {
    setPreviousPage(state) {
      state.pageData.page -= 1;
      state.pageData.pageItems = state.teams.slice(
        state.pageData.page * state.pageData.pageSize,
        (state.pageData.page + 1) * state.pageData.pageSize,
      );
    },
    setNextPage(state) {
      const newPageData = state.teams.slice(
        state.pageData.page * state.pageData.pageSize,
        (state.pageData.page + 1) * state.pageData.pageSize,
      );
      if (newPageData.length > 0) {
        state.pageData.page += 1;
        state.pageData.pageItems = newPageData;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTeams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teams = [...(action.payload as ITeam[])];
        state.pageData.pageItems = [
          ...(action.payload.slice(0, state.pageData.pageSize) as ITeam[]),
        ];
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message;
      });
  },
});

export const { setPreviousPage, setNextPage } = teamSlice.actions;

export default teamSlice.reducer;
