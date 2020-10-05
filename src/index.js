import C from "./constants";
import appReducer from "./store/reducers";
import { createStore } from "redux";

const initialState = localStorage["redux-store"]
    ? JSON.parse(localStorage["redux-store"])
    : {};

const store = createStore(appReducer, initialState);

//Make it global, so console can asscess it
window.store = store;

//Call the callback when there is a dispatch
store.subscribe(() => {
    const state = JSON.stringify(store.getState());
    localStorage["redux-store"] = state;
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        resort: "Heavenly",
        date: "2020-08-13",
        powder: true,
        backcountry: false,
    },
});

store.dispatch({
    type: C.SET_GOAL,
    payload: 2,
});
