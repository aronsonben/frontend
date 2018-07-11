import React from 'react';
import TodoForm from './TodoForm';
import "./Body.css";

class Body extends React.Component {
    render() {
        return(
            <div className="component-body">
                <h1>React-body</h1>
                <p>The home page of React practice.</p>
                <TodoForm />
            </div>
        );
    }
}
export default Body;