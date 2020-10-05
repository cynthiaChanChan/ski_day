import storeFactory from "./store";
import { addDay, removeDay, setGoal } from "./actions";

const store = storeFactory();

store.dispatch(addDay("Heavenly", "2020-8-13"));
store.dispatch(removeDay("2020-8-13"));
store.dispatch(setGoal(7));
