import React from 'react';
import {selectors, actions} from '../../Redux/index';
import {useSelector, useDispatch} from 'react-redux';

export default function TodoList() {
    const allTodos = useSelector(selectors.Todo.allTodos);

    return (
        <ul className="todo-list">
            {allTodos.map(todo =>
                <li key={todo.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={todo.done} />
                        <label>{todo.title}</label>
                    </div>
                </li>
            )}
        </ul>
    );
}