import { createStore } from "redux";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREASE: "increase",
    TOGGLE: "toggle",
};

const initialState = {counter: 0, displayed: true};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case ACTIONS.INCREASE:
            return {
                ...state,
                counter: state.counter + action.payload.value,
            };
        case ACTIONS.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case ACTIONS.TOGGLE:
            return {
                ...state,
                displayed: !state.displayed,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
export { ACTIONS };