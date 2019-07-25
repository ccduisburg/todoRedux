import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        // ...
    };

    render() {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <input class="new-todo"
                   placeholder="What needs to be done?" />
            </header>
        );
    }
}