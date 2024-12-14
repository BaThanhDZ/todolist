import * as types from './../constants/actionTypes';

export const actCloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const actOpenForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const actToggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const actSort = (orderBys, orderDir) => {
    return {
        type: types.SORT_FORM,
        orderBys,
        orderDir
    }
}
export const actSearch = (search) => {
    return {
        type: types.CHANGE_SEARCH,
        search
    }
}