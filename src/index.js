import C from "./constants";
import appReducer from "./store/reducers";
import initailState from "./initialState.json";
import { createStore } from "redux";

const store = createStore(appReducer, initailState);

console.log("initial state", store.getState());

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        resort: "Heavenly",
        date: "2020-08-13",
        powder: true,
        backcountry: false,
    },
});

console.log("next state", store.getState());
