import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
            <div>
                <li id="listItem" onClick={() => this.handleClick(item)} key={item.key} dateCreated="0">{item.text}</li>
                <button id="itemDel" onClick={() => this.delete(item.key)}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </div>
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