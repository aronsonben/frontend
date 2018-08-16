import React, { Component } from "react";

class TodoBox extends Component {

    render() {
        if(this.props.showBox) {
            return(
                <div className="itemInfo">
                    <span>InfoBox div</span>
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