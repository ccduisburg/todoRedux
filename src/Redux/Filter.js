import {createAction, handleActions} from 'redux-actions';

// Initial State
const initialState = {
    showAll: false
};

// Action types
const FILTER_SHOW_ALL = 'todo/Filter/SHOW_ALL';
const FILTER_SHOW_OPEN = 'todo/Filter/SHOW_OPEN';
const FILTER_SHOW_CLOSED = 'todo/Filter/SHOW_CLOSED';
export const actionTypes = {
    FILTER_SHOW_ALL,
    FILTER_SHOW_OPEN,
    FILTER_SHOW_CLOSED
};

// Actions
export const actions = {
    filterShowAll: createAction(FILTER_SHOW_ALL),
    filterShowOpen: createAction(FILTER_SHOW_OPEN),
    filterShowClosed:createAction(FILTER_SHOW_CLOSED)
};

// Reducers
export const reducers = handleActions({
    [FILTER_SHOW_ALL]: (state, action) => ({...state, showAll: true }),
    [FILTER_SHOW_OPEN]: (state, action) => ({...state, showAll: false }),
    [FILTER_SHOW_CLOSED]: (state, action) => ({...state, showAll: false })
}, initialState);

// Selectors
const showAll = state => state.Filter.showAll;

export const selectors = {
    showAll
};