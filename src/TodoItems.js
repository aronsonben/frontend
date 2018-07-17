import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoBox extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className="itemInfo">
                This is a div
            </div>
        );
    }
}

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInfo: false
        };

        this.createTasks = this.createTasks.bind(this);
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        // Event Handler for click
        return (
            //<li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
            <li onClick={() => this.toggleDiv(item)} key={item.key}>{item.text}</li>
            //<li key={item.key}>
            //    <h4>{item.text}</h4>
            //    <button>hi</button>
            //</li>
        );
    }

    toggleDiv(item) {
        this.setState({
            showInfo : !this.state.showInfo
        });
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out">
                        {listItems}
                    </FlipMove>
                </ul>
                <div className="infoBox">
                    { this.state.showInfo && <TodoBox /> }
                </div>
            </div>
        );
    }
};

export default TodoItems;