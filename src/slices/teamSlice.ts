import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllTeams } from '../services';
import { ITeamsInitialState } from './slices.type';
import { ITeam } from '../types';
import { compareOnTheBasisOfName, doesStringAincludesB } from '../utils';

const initialState = {
  teams: [],
  filteredTeams: [],
  status: 'idle',
  error: null,
  pageData: {
    pageItems: [],
    page: 1,
    pageSize: 7,
  },
} as ITeamsInitialState;

/**
 * * Thunk to get response of all teams and set the store
 */
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
    setPageData(state) {
      const { pageData, filteredTeams } = state;
      state.pageData.page = 1;
      pageData.pageItems = filteredTeams.slice(
        (state.pageData.page - 1) * state.pageData.pageSize,
        state.pageData.page * state.pageData.pageSize,
      );
    },
    setPreviousPage(state) {
      const { pageData, filteredTeams } = state;
      pageData.page -= 1;
      pageData.pageItems = filteredTeams.slice(
        (pageData.page - 1) * pageData.pageSize,
        pageData.page * pageData.pageSize,
      );
    },
    setNextPage(state) {
      const { pageData, filteredTeams } = state;
      const newPageData = filteredTeams.slice(
        pageData.page * pageData.pageSize,
        (pageData.page + 1) * pageData.pageSize,
      );

      if (newPageData.length > 0) {
        pageData.page += 1;
        pageData.pageItems = newPageData;
      }
    },
    sortAscendinglyBy(
      state,
      action: PayloadAction<{ field: string; order?: string }>,
    ) {
      const { pageData } = state;
      const { field } = action.payload;
      const sortedTeams = state.pageData.pageItems.sort(
        (elemA: unknown, elemB: unknown) =>
          compareOnTheBasisOfName(
            elemA as Record<string, string>,
            elemB as Record<string, string>,
            field,
          ),
      );
      pageData.pageItems = sortedTeams;
    },
    sortDescendinglyBy(
      state,
      action: PayloadAction<{ field: string; order?: string }>,
    ) {
      const { pageData } = state;
      const { field } = action.payload;
      const sortedTeams = state.pageData.pageItems.sort(
        (elemA: unknown, elemB: unknown) =>
          compareOnTheBasisOfName(
            elemA as Record<string, string>,
            elemB as Record<string, string>,
            field,
            true,
          ),
      );
      pageData.pageItems = sortedTeams;
    },
    filterTeams: (state, action: PayloadAction<string>) => {
      state.filteredTeams = state.teams.filter(
        ({ city, name, full_name, abbreviation, division, conference }) => {
          return (
            doesStringAincludesB(city, action.payload) ||
            doesStringAincludesB(name, action.payload) ||
            doesStringAincludesB(full_name, action.payload) ||
            doesStringAincludesB(abbreviation, action.payload) ||
            doesStringAincludesB(division, action.payload) ||
            doesStringAincludesB(conference, action.payload)
          );
        },
      );
      state.pageData.pageItems = state.teams.slice(
        (state.pageData.page - 1) * state.pageData.pageSize,
        state.pageData.page * state.pageData.pageSize,
      );
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
        state.filteredTeams = [...(action.payload as ITeam[])];
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

export const {
  setPreviousPage,
  setNextPage,
  sortAscendinglyBy,
  sortDescendinglyBy,
  filterTeams,
  setPageData,
} = teamSlice.actions;

export default teamSlice.reducer;
