import React, { Component } from "react";
import FlipMove from "react-flip-move";
import InfoBox from "./InfoBox";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        var selectedItem = this.props.selectedItem;

        this.createTasks = this.createTasks.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return (
            //<li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
            <li onClick={() => this.handleClick(item)} key={item.key}>{item.text}</li>
        );
    }

    handleClick(item) {
        this.props.toggleDiv(item);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <div className="listDiv">
                    <ul className="theList">
                        <FlipMove duration={250} easing="ease-out">
                            {listItems}
                        </FlipMove>
                    </ul>
                </div>
            </div>
        );
    }
};

export default TodoItems;