import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotesList: [],
};

const quotesSlice = createSlice({
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotesList.push(action.payload);
    },
  },
  name: 'quotes'
});

export const quotesActions = quotesSlice.actions;
export default quotesSlice.reducer;