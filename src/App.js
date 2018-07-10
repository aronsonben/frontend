import React from 'react';
import Header from "./Header";
import Body from "./Body";

// Ben Aronson - change for github?
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}
export default App;