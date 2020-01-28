import React from "react";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

function App() {
    return (
        <>
            <NormalizeStyles />
            <BaseStyles />
            <h1>Hello, Lambda</h1>
            <button onClick={methodDoesNotExist}>Break the world</button>;
        </>
    );
}

export default App;
