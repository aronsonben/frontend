import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import InfoBox from "./InfoBox";
import "./TodoList.css";

class ListItem {
    constructor(text, key, dateCreated) {
        this.key = key;
        this.text = text;
        this.dateCreated = dateCreated;
    }

    // Will need to either use JSON.stringify into localStorage or use this function
    // toString() {
    //     return this.text;
    // }
}

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            storedItems: [],
            showInfo: false,
            selectedItem: null
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleDiv = this.toggleDiv.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    componentDidMount() {
        // load localStorage items upon render
        var storedValues = this.getLocalStorage();
        var storedItems2 = storedValues.map(this.getItemsFromStorage);
        console.log(storedItems2);

        storedItems2.reverse().pop();
        storedItems2.map((item) => this.state.storedItems.push(item));
        console.log(this.state.storedItems);
    }

    getLocalStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while( i-- ) {
            values.push(localStorage.getItem(keys[i]));
        }
        return values;
    }

    getItemsFromStorage(item) {
        if(item.toString() === "INFO") {
            return JSON.parse('{"key": 0, "text": "test"}');
        }
        return JSON.parse(item);
    }

    addItem(e) {
        if(this.inputElement.value !== "") {
            var newItem = {
                key: Date.now(),
                text: this.inputElement.value,
                dateCreated: new Date().toLocaleTimeString()
            };

            var newItem2 = new ListItem(this.inputElement.value,
                                        Date.now(), new Date().toLocaleTimeString());

            //console.log(newItem2);

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.inputElement.value = "";
        }

        localStorage.setItem(newItem2.key, JSON.stringify(newItem2));

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        if(this.state.selectedItem !== null && this.state.selectedItem.key !== key) {
            this.setState({
                items: filteredItems
            });
        } else {
            this.setState({
                items: filteredItems,
                showInfo: false,
                selectedItem: null
            });
        }

        localStorage.removeItem(key);
    }

    // clearing storedItems creates async prob with localStorage (?)
    clearAll() {
        this.setState({
            items: [],
            storedItems: [],
            showInfo: false,
            selectedItem: null
        });
    }

    toggleDiv(item) {
        if(this.state.selectedItem !== null) {
            if(this.state.selectedItem.key === item.key) {
                this.setState({
                    showInfo : !this.state.showInfo,
                    selectedItem: null
                });
            } else {
                this.setState({selectedItem: item});
            }
        } else {
            this.setState({
                showInfo : !this.state.showInfo,
                selectedItem: item
            });
        }
    }

    render() {
        //localStorage.setItem("myItems", this.state.items);

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a}
                                placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                        <button onClick={this.clearAll}>clear</button>
                    </form>
                </div>
                <div id="infoSection">
                    <div className="infoCol" id="listItems">
                        <TodoItems entries={this.state.items}
                                   storedEntries={this.state.storedItems}
                                   delete={this.deleteItem}
                                   toggleDiv={this.toggleDiv}
                                   selectedItem={this.state.selectedItem}/>
                    </div>
                    <div className="infoCol" id="itemInfoBox">
                        <InfoBox showBox={this.state.showInfo}
                                 delete={this.deleteItem}
                                 selectedItem={this.state.selectedItem}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoList;