//index.jsx

import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
});

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
        <HelloWorld greetTarget="Nicolas Cage"/>
    </div>,
    document.querySelector("#container")
);