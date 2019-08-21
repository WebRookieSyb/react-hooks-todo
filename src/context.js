import React from "react";

const Store = React.createContext({
    todos: [
        "study vue",
        "study react",
        "study node"
    ]
});

export default Store;