import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
    query: string;
    results: any[];
    isLoading: boolean;
    error: any;
};

const initialState: SearchState = {
    query: "",
    results: [],
    isLoading: false,
    error: null,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
            state.isLoading = true;
        }
    },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;