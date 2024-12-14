import { combineReducers } from "redux";
import items from "./items";
import isShowForm from "./isShowForm";
import search from "./search";

const appReducers = combineReducers({
    isShowForm,
    items,
    search
});

export default appReducers;