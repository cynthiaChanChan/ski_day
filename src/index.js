import storeFactory from "./store";
import {
    addDay,
    removeDay,
    setGoal,
    addError,
    clearError,
    changeSuggestions,
    clearSuggestions,
    randomGoals,
    suggestResortNames,
} from "./actions";
import expect from "./expect";

const store = storeFactory();

store.dispatch(addDay("Heavenly", "2020-8-13"));
store.dispatch(removeDay("2020-8-13"));
store.dispatch(setGoal(7));

store.dispatch(addError("something went wrong"));
expect(store.getState().errors).toEqual(["something went wrong"]);
console.log("addError() Action Creator Works!");

store.dispatch(clearError(0));
expect(store.getState().errors).toEqual([]);
console.log("clearError() Action Creator Works!");

store.dispatch(changeSuggestions(["one", "Two", "Three"]));
expect(store.getState().resortNames.suggestions).toEqual([
    "one",
    "Two",
    "Three",
]);
console.log("changeSuggestions() Action Creator Works!");

store.dispatch(clearSuggestions());
expect(store.getState().resortNames.suggestions).toEqual([]);
console.log("clearSuggestions() Action Creator Works!");

store.dispatch(suggestResortNames("hea"));
