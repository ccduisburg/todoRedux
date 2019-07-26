import {createAction, handleActions} from 'redux-actions';
import {selectors as filterSelectors} from './Filter';

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
const TOGGLE = 'todo/Todo/TOGGLE';
const DELETETODO = 'todo/Todo/DELETE';
export const actionTypes = {
    ADD_TODO,
    TOGGLE,
    DELETETODO
};

// Actions
export const actions = {
    addTodo: createAction(ADD_TODO, title => ({title})),
    toggle: createAction(TOGGLE, id => ({id})),
    deleteTodo:createAction(DELETETODO, id => ({id})),
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
[TOGGLE] : (state, action) => {
    
            // return state.map(todo =>
            //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            //   )
             let tmp = [...state.todos];
             tmp.forEach(one=> {
                 if(one.id === action.payload.id) one.done = !one.done;
             });
              return{
                  
                  todos: tmp
              }     
          },        

          [DELETETODO]:(state,action)=>{
           let tmp=state.todos.filter(one=> one.id !== action.payload.id);
           return {
               todos: tmp
           }
          }
    
}, initialState);

// Selectors
const allTodos = state => state.Todo.todos;
const openTodos = state => state.Todo.todos.filter(todo => !todo.done);
const closeTodos = state => state.Todo.todos.filter(todo => todo.done);
const visibleTodos = state => {
    return filterSelectors.showAll(state) ?
        allTodos(state) : filterSelectors.showOpen(state)? openTodos(state):
        closeTodos(state)
     
}

export const selectors = {
    visibleTodos
};