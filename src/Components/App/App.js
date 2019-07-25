import React, {PureComponent} from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

export default class App extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header title="Todos"/>
                <TodoList />
                <Footer />
            </React.Fragment>
        );
    }
}
