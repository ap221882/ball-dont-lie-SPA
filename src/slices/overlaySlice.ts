import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOverlayInitialState } from './slices.type';

const overlayInitialState: IOverlayInitialState = {
  showOverlay: false,
  overlay: '',
  data: null,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: overlayInitialState,
  reducers: {
    showOverlay(
      state,
      action: PayloadAction<{ data: Record<string, any>; overlay: string }>,
    ) {
      state.showOverlay = true;
      state.overlay = action.payload?.overlay;
      state.data = action.payload?.data;
    },
    hideOverlay(state) {
      state.showOverlay = false;
      state.overlay = '';
      state.data = null;
    },
  },
});

export const { showOverlay, hideOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
