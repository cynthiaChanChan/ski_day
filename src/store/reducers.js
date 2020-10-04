import C from "../constants";

export const goal = (state = 10, action) => {
    return action.type === C.SET_GOAL ? parseInt(action.payload) : state;
};

export const skiDay = (state = null, action) => {
    return action.type === C.ADD_DAY ? action.payload : state;
};
