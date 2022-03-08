// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement",
//     INCREASE: "increase",
//     TOGGLE: "toggle",
// };



const store = configureStore({
    reducer: { 
        counter: counterReducer,
        auth: authReducer,
    }
    // reducer: counterSlice.reducer, // if more than one slice, then we could assign an object like this: {key1: reducer1, key2: reducer2, ...}
})

// export const counterActions = counterSlice.actions; // action object's methods are called "action creator"
// export const authActions = authSlice.actions;
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