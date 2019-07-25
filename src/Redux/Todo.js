import {createAction, handleActions} from 'redux-actions';

// Initial State
const initialState = {
    todos: [
        {
            id: 0,
            title: "Todo 0",
            done: true
        },
        {
            id: 1,
            title: "Todo 1",
            done: false
        },
    ]
};

// Action types
const ADD_TODO = 'todo/Todo/ADD';
export const actionTypes = {
    ADD_TODO,
};

// Actions
export const actions = {
    addTodo: createAction(ADD_TODO, title => ({title})),
};

// Reducers
export const reducers = handleActions({
    [ADD_TODO]: (state, action) => {
        return {
            todos: [
                ...state.todos,
                {
                    id: state.todos.length,
                    title: action.payload.title,
                    done: false
                }
            ]
        }
    },
}, initialState);

// Selectors
const allTodos = state => state.Todo.todos;

export const selectors = {
    allTodos
};