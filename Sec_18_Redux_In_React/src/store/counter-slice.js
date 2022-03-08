import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {counter: 0, displayed: true};
const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++; // use redux toolkit allow us to mutate state (but the clone state actually)
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload.value; // the property name must be "payload"
        },
        toggle(state) {
            state.displayed = !state.displayed;
        },
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;