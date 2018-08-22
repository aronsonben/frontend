import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import InfoBox from "./InfoBox";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            showInfo: false,
            selectedItem: null
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleDiv = this.toggleDiv.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    addItem(e) {
        if(this.inputElement.value !== "") {
            var newItem = {
                text: this.inputElement.value,
                key: Date.now(),
                dateCreated: new Date().toLocaleTimeString()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.inputElement.value = "";
        }

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

    }

    clearAll() {
        this.setState({
            items: [],
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