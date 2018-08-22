import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css";

class Header extends React.Component {
    render() {
        return(
            <header className="component-header">
                <FontAwesomeIcon icon="react" />
                To-do List
                <FontAwesomeIcon icon="react" />
            </header>
        );
    }
}
<FontAwesomeIcon icon="times" />
export default Header;