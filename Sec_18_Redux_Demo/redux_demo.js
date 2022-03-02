import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const counter = createStore(reducer);

counter.subscribe(() => {
    console.log(`changed! state: ${counter.getState()}`);
});

console.log(`default value: ${counter.getState()}`);

counter.dispatch({type: "INCREMENT"});

console.log(`after value: ${counter.getState()}`);