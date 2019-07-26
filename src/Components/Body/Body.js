import React, { PureComponent } from 'react';
import classes from './Body.css'


function Todo(props) {
    return (

        <div class="view">
            <input class="toggle" type="checkbox"
             onChange={handleInputChange}/>
            <label>Todo 1</label>
        </div>

    );
}
handleInputChange=(event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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