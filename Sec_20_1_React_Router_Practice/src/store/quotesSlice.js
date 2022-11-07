import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotesList: [],
};

const quotesSlice = createSlice({
  initialState,
  reducers: {
    replaceAllQuotes: (state, action) => {
      state.quotesList = action.payload || [];
    },
    addQuote: (state, action) => {
      state.quotesList.push(action.payload);
    },
  },
  name: 'quotes'
});

export const quotesActions = quotesSlice.actions;
export default quotesSlice.reducer;