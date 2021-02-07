import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <h2>Class Component Dalam 1 File</h2>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Rendering Elements</h1>
            </div>
        );
    }
}

export default App;
