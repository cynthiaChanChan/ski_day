import C from "./constants";
import appReducer from "./store/reducers";
import initailState from "./initialState.json";

let state = initailState;

console.log(`

    initail state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}

`);

state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2,
});

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        resort: "Heavenly",
        date: "2020-8-13",
        powder: true,
        backcountry: false,
    },
});

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["Heavenly", "Hawaii"],
});

console.log(`

    next state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}

`);
