import React from 'react';
import {selectors, actions} from '../../Redux/index';
import {useSelector, useDispatch} from 'react-redux';

export default function TodoList() {
    const visibleTodos = useSelector(selectors.Todo.visibleTodos);
    // not needed anymore
    const openTodos = useSelector(selectors.Todo.openTodos);
    const showAll = useSelector(selectors.Filter.showAll);
    // const todosToShow = showAll ? allTodos : openTodos;

    const dispatch = useDispatch();

    const handleChange = (id) => dispatch(actions.Todo.toggle(id));


    return (
        <ul className="todo-list">
            {visibleTodos.map(todo =>
                <li key={todo.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox"  checked={todo.done}
                         onChange={() => handleChange(todo.id)}
                        />
                        <label>{todo.title}</label>
                    </div>
                </li>
            )}
        </ul>
    );
}