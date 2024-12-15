import * as types from "./../constants/actionTypes";
const defaultState = {orderBys: 'level', orderDir: "desc"};

const sort = (state = defaultState, action) => {
    let {orderBys, orderDir} = action;
    switch(action.type) {
        case types.SORT_FORM:
            return {orderBys, orderDir};
        default:
            return state;
    }
}

export default sort;