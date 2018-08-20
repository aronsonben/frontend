import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import Body from "./Body";
import TodoList from "./TodoList";

library.add(faTimes);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>To-do List</h1>
                <p>Thanks to <a href="https://www.kirupa.com/react/simple_todo_app_react.htm">kirupa.com's react tutorial.</a></p>
                <TodoList />
            </div>
        );
    }
}
export default App;