import React, { Component } from "react";

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item,
            key: this.props.item.key,
            dateCreated: 0,
            notes: ""
        }
    }

    render() {
        var item = this.props.item;
        //    dateCreated1 = new Date().getDate().toString();
        //this.setState({dateCreated: dateCreated1});

        return (
            <li id="listItem" onClick={this.props.onClick} key={item.key}>
                {item.text}
            </li>
        );
    }
}

export default ListItem;