import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css";

class Header extends React.Component {

    clearLocal() {
        localStorage.clear();
        console.log("Local storage cleared: ");
        console.log(localStorage);
    }

    render() {
        return(
            <header className="component-header">
                <FontAwesomeIcon icon="react" />
                To-do List
                <FontAwesomeIcon icon="react" />
                <button style={{float: "right"}} onClick={this.clearLocal.bind(this)}>cl.locSto</button>
                <button style={{float: "right"}} onClick={() => {console.log(localStorage)}}>pr.locSto</button>
            </header>
        );
    }
}
<FontAwesomeIcon icon="times" />
export default Header;