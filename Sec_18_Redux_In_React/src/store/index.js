// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement",
//     INCREASE: "increase",
//     TOGGLE: "toggle",
// };

const initialState = {counter: 0, displayed: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
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

const store = configureStore({
    reducer: counterSlice.reducer, // if more than one slice, then we could assign an object like this: {key1: reducer1, key2: reducer2, ...}
})

export const counterActions = counterSlice.actions; // action object's methods are called "action creator"
export default store;

// use Redux package

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             };
//         case ACTIONS.INCREASE:
//             return {
//                 ...state,
//                 counter: state.counter + action.payload.value,
//             };
//         case ACTIONS.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             };
//         case ACTIONS.TOGGLE:
//             return {
//                 ...state,
//                 displayed: !state.displayed,
//             };
//         default:
//             return state;
//     }
// };

// const store = createStore(counterReducer);

// export default store;
// export { ACTIONS };