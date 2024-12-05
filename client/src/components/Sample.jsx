// Filename - App.js

import { useState } from "react";
// import "./App.css";

function Sample() {
    const [inp, setINP] = useState("");
    const [name, setName] = useState("");

    const clk = () => {
        setName(inp);
        setINP("");
    };

    const changehandler = (event) => {
        setINP(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className="App">
            <h1>GeeksforGeeks</h1> <br />
            {name ? <h2>Your Name: {name}</h2> : null}
            <input
                type="text"
                placeholder="Enter your name..."
                onChange={changehandler}
                value={inp}
            />
            <button onClick={clk}>Save</button>{" "}
        </div>
    );
}

export default Sample;

