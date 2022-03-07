// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement",
//     INCREASE: "increase",
//     TOGGLE: "toggle",
// };

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

const authInitialState = {isAuth: false};
const authSlice = createSlice({
    name: "authentication",
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    }
});

const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
    // reducer: counterSlice.reducer, // if more than one slice, then we could assign an object like this: {key1: reducer1, key2: reducer2, ...}
})

export const counterActions = counterSlice.actions; // action object's methods are called "action creator"
export const authActions = authSlice.actions;
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