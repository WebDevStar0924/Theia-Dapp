import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeChainID: 1,
  activeCurrency: {
    name: "USDT",
    symbol: "USDT",
  },
};

const chainSlice = createSlice({
  name: "chain",
  initialState,
  reducers: {
    setActiveChainID: (state, actions) => ({
      ...state,
      activeChainID: actions.payload,
    }),

    setActiveCurrency: (state, actions) => ({
      ...state,
      activeCurrency: actions.payload,
    }),
  },
});

export const { setActiveChainID, setActiveCurrency } = chainSlice.actions;

export default chainSlice.reducer;
