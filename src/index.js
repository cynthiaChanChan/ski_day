import C from "./constants";
import storeFactory from "./store";

const initialState = localStorage["redux-store"]
    ? JSON.parse(localStorage["redux-store"])
    : {};

const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage["redux-store"] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        resort: "Heavenly",
        date: "2020-8-14",
        powder: true,
        backcountry: false,
    },
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        resort: "Hawaii",
        date: "2020-8-13",
        powder: true,
        backcountry: false,
    },
});
