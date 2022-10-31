import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotesList: [],
};

const quotesSlice = createSlice({
  initialState,
  reducers: {
    addQuote: () => {

    },
  },
  name: 'quotes'
});

export const quotesAction = quotesSlice.actions;
export default quotesSlice.reducer;