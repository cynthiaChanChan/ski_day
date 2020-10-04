import C from "./constants";
import { allSkiDays, goal } from "./initialState.json";

console.log(`

    Ski Day Counter
    ===============
    The goal is ${goal} days
    Initally there are ${allSkiDays.length} ski days in state

    Contants (actions)
    ------------------
    ${Object.keys(C).join("\n    ")}

`);
