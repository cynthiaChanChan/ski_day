import C from "./constants";
import { skiDay } from "./store/reducers";

const state = null;

const action = {
    type: C.ADD_DAY,
    payload: {
        resort: "Heavenly",
        date: "2010-8-5",
        powder: true,
        backcountry: false,
    },
};

const nextState = skiDay(state, action);

console.log(`
    initail state: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
