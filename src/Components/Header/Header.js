import React, { PureComponent,useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {actions} from '../../Redux/index';
import {useDispatch} from 'react-redux';

function Header(props) {
    const [title,setTitle]=useState("");
    const dispatch = useDispatch();
    const hanleInput=()=>{        
        dispatch(actions.Todo.addTodo(title))
        setTitle("")
    
    };   
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();                
                hanleInput()}}>
            <input type="text"
                value={title}
                className="new-todo"
                placeholder="What needs to be done?"               
                onChange={(e)=>setTitle(e.target.value)}
                
            />
            </form>
        </header>
    );
}
export default Header;
