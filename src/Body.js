import React from 'react';
import TodoList from './TodoList';
import "./Body.css";

class Body extends React.Component {
    render() {
        return(
            <div className="component-body">
                <h1>To-do List</h1>
                <p>Thanks to <a href="https://www.kirupa.com/react/simple_todo_app_react.htm">kirupa.com's react tutorial.</a></p>
                <TodoList />
            </div>
        );
    }
}
export default Body;