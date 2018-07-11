import React from 'react';

const TodoForm = ({addTodo}) => {
    //Input tracker
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                addTodo(input.value);
                input.value = '';
            }}>
                +
            </button>
        </div>
    );
};

const Todo = ({todo, remove}) => {
    // Each To-do element
    return (
        <li onClick={() => {remove(todo.id)}}>
            {todo.text}
        </li>
    );
};

const TodoList = ({todos, remove}) => {
    // Map through the to-dos
    const todoNode = todos.map((todo) => {
        return (
            <Todo
                todo={todo}
                key={todo.id}
                remove={remove} />
        );
    });
    return(
        <ul>{todoNode}</ul>
    );
};

window.id = 0;
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    //Add to-do handler
    addTodo(val) {
        // assemble data
        const todo = {text: val, id: window.id++};
        // update data
        this.state.data.push(todo);
        // update state
        this.setState({data: this.state.data});
    }
    // handle remove
    handleRemove(id) {
        // filter all to-dos except one to be removed
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
    }

    render() {
        return (
            <div>
                <div>To-do list</div>
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos = {this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}
export default TodoForm;