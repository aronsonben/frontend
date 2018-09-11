import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Header from "./Header";
import TodoList from "./TodoList";

library.add(fab);
library.add(faTimes);
library.add(faReact);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <p>Thanks to <a href="https://www.kirupa.com/react/simple_todo_app_react.htm">kirupa.com's react tutorial.</a></p>
                <TodoList />
            </div>
        );
    }
}
export default App;
