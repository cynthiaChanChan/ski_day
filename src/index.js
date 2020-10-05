import C from "./constants";
import { allSkiDays } from "./store/reducers";

const state = [
    {
        resort: "Stowe",
        date: "2020-8-6",
        powder: false,
        backcontry: true,
    },
    {
        resort: "Snowbird",
        date: "2020-8-7",
        powder: false,
        backcontry: true,
    },
];

const action = {
    type: C.REMOVE_DAY,
    payload: "2020-8-7",
};

const nextState = allSkiDays(state, action);

console.log(`
    initail state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);
