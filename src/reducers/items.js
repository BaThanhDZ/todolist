import * as types from "../constants/actionTypes";
import * as config from "../constants/config";
import { remove, reject } from "lodash";
import { v4 as uuidv4 } from 'uuid';

let defaultState = [
    {id: "A1", name: "ReactJS", level: 0},
    {id: "A2", name: "NodeJS", level: 1},
    {id: "A3", name: "React Native", level: 2},
];

let tasks = JSON.parse(localStorage.getItem(config.ITEM_FROM_LOCAL_STORAGE));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch (action.type) {
        case types.DELETE_ITEM:
            // const id = action.id;
            // remove(state, (item) => {
            //     return item.id === id
            // });
            remove(state, (item) => {
                return item.id === action.id;
            })
            localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state];

        case types.SUBMIT_FORM:
            let id = "";
            let {item} = action;

            if(item.id !== '') { // edit
                state = reject(state, {id: item.id});
                id: item.id;
            }
            else { // thêm mới
                id: uuidv4()
            }
            state.push  ({
                id: id,
                name: item.name,
                level: +item.level
            })

            localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state];  

        default:
            return state;
    }
}

export default items;