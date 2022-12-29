import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllTeams } from '../services';
import { ITeamsInitialState } from './slices.type';
import { ITeam } from '../types';

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

//////////////////////////////////////////////
export const compareOnTheBasisOfName = (
  elemA: Record<string, string> | string,
  elemB: Record<string, string> | string,
  fieldName: string,
  desc?: boolean,
) => {
  const fieldA = fieldName
    ? String((elemA as Record<string, string>)[fieldName]).toUpperCase()
    : (elemA as string).toUpperCase();
  const fieldB = fieldName
    ? String((elemB as Record<string, string>)[fieldName]).toUpperCase()
    : (elemB as string).toUpperCase();
  if (desc) {
    if (fieldA > fieldB) return -1;
    else if (fieldA < fieldB) return 1;
  } else {
    if (fieldA < fieldB) return -1;
    else if (fieldA > fieldB) return 1;
  }

  return 0;
};

//////////////////////////////////////////////

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setPreviousPage(state) {
      const { pageData, teams } = state;
      pageData.page -= 1;
      pageData.pageItems = teams.slice(
        (pageData.page - 1) * pageData.pageSize,
        pageData.page * pageData.pageSize,
      );
    },
    setNextPage(state) {
      const { pageData, teams } = state;
      const newPageData = teams.slice(
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
      state.teams = state.teams.filter((team) => {
        return team.city.includes(action.payload);
      });
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
} = teamSlice.actions;

export default teamSlice.reducer;
