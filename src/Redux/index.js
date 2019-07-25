import * as Filter from './Filter';
import * as Todo from './Todo';
import {combineReducers} from 'redux';

export const actionTypes = {
    Filter: Filter.actionTypes,
    Todo: Todo.actionTypes
};

export const actions = {
    Filter: Filter.actions,
    Todo: Todo.actions
};

export const reducers = combineReducers({
    Filter: Filter.reducers,
    Todo: Todo.reducers
});

export const selectors = {
    Filter: Filter.selectors,
    Todo: Todo.selectors
};