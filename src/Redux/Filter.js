import {createAction, handleActions} from 'redux-actions';

// Initial State
const initialState = {
    showAll: false
};

// Action types
const FILTER_SHOW_ALL = 'todo/Filter/SHOW_ALL';
const FILTER_SHOW_OPEN = 'todo/Filter/SHOW_OPEN';
export const actionTypes = {
    FILTER_SHOW_ALL,
    FILTER_SHOW_OPEN
};

// Actions
export const actions = {
    filterShowAll: createAction(FILTER_SHOW_ALL),
    filterShowOpen: createAction(FILTER_SHOW_OPEN)
};

// Reducers
export const reducers = handleActions({
    [FILTER_SHOW_ALL]: (state, action) => ({...state, showAll: true }),
    [FILTER_SHOW_OPEN]: (state, action) => ({...state, showAll: false })
}, initialState);

// Selectors
const showAll = state => state.Filter.showAll;

export const selectors = {
    showAll
};