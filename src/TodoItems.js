import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        let { entries, storedEntries } = this.props;
        // if storedItem, make it a different color
        if(storedEntries.includes(item) && !entries.includes(item)) {
            return (
                <div>
                    <li id="storedListItem" onClick={() => this.handleClick(item)} key={item.key} dateCreated="0">{item.text}</li>
                    <button id="itemDel" onClick={() => this.delete(item.key)}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>
            );
        } else {
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
    }

    // get all localStorage items and print them first
    getStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }

        return values;
    }

    handleClick(item) {
        this.props.toggleDiv(item);
    }

    render() {
        var todoEntries = this.props.entries,
            storedTodoEntries = this.props.storedEntries;
        var storedListItems = storedTodoEntries.map(this.createTasks);
        var listItems = todoEntries.map(this.createTasks);
        var items2 = this.getStorage();
        //console.log(items2);
        return (
            <div>
                <div className="listDiv">
                    <ul className="theList">
                        <FlipMove duration={250} easing="ease-out">
                            {storedListItems}
                        </FlipMove>
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