import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoBox extends Component {

    render() {
        if(this.props.showBox) {
            var item = this.props.selectedItem;
            return(
                <div className="infobox">
                    <div className="infobox-hdr">
                        <h2>InfoBox</h2>
                        <p><i>for more information about selected TodoList item</i></p>
                    </div>
                    <p>Name: {item.text}</p>
                    <p>Key: {item.key}</p>
                    <p>Date Created: </p> <br />
                    <button className="delbtn" onClick={() => this.props.delete(item.key)}>delete</button>
                </div>
            );
        } else {
            return (
                <div class="itemInfoHidden" style={{display: 'none'}}>
                    <span>hidden InfoBox</span>
                </div>
            );
        }
        //<button className="delbtn" onClick={() => this.props.delete(item.key)}>delete</button>
    }
}

export default TodoBox;