import React, { PureComponent } from 'react';
import classes from './Body.css'


function Todo(props) {
    return (

        <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Todo 1</label>
        </div>

    );
}

const todoList = [
    <Todo name="Todo 1" />,
    <Todo name="Todo 2" />
];

export default class Body extends PureComponent {

    render() {
        return (
            <div className={classes.body}>
                <section class="main">
                    <ul class="todo-list">
                        {todoList}
                    </ul>
                </section>
            </div>
        );
    }
}