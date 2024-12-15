import * as types from './../constants/actionTypes';

export const actDeleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
}
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
export const actSubmit = (item) => {
    return {
        type: types.SUBMIT_FORM,
        item
    }
}
export const actSelected = (item) => {
    return {
        type: types.SELECTED_ITEM,
        item
    }
}
export const actUnSelect = () => {
    return {
        type: types.UNSELECT_ITEM
    }
}