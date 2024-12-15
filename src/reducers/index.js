import { combineReducers } from "redux";
import items from "./items";
import isShowForm from "./isShowForm";
import search from "./search";
import sort from "./sort";
import itemSelected from "./itemSelected";

const appReducers = combineReducers({
    isShowForm,
    items,
    search,
    sort,
    itemSelected
});

export default appReducers;