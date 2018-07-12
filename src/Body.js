import React from 'react';
import TodoList from './TodoList';
import "./Body.css";

class Body extends React.Component {
    render() {
        return(
            <div className="component-body">
                <h1>React-body</h1>
                <p>The home page of React practice.</p>
                <TodoList />
            </div>
        );
    }
}
export default Body;