import { createStore } from "redux";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREASE: "increase",
};

const reducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {counter: state.counter + 1};
        case ACTIONS.INCREASE:
            return {counter: state.counter + action.payload.value};
        case ACTIONS.DECREMENT:
            return {counter: state.counter - 1};
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
export { ACTIONS };