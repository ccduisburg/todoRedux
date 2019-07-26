import {createAction, handleActions} from 'redux-actions';

// Initial State
const initialState = {
    showAll: true,
    showOpen: false,
    showClosed: false
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
    [FILTER_SHOW_ALL]: (state, action) => ({...state, showAll: true, showOpen: false, showClosed: false }),
    [FILTER_SHOW_OPEN]: (state, action) => ({...state, showAll: false, showOpen: true, showClosed: false }),
    [FILTER_SHOW_CLOSED]: (state, action) => ({...state, showAll: false, showOpen: false, showClosed: true })
}, initialState);

// Selectors
const showAll = state => state.Filter.showAll;
const showClosed = state => state.Filter.showClosed;
const showOpen = state => state.Filter.showOpen;

export const selectors = {
    showAll,
    showClosed,
    showOpen
};