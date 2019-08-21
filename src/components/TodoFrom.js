import React, { useState, useContext } from "react";
import Store from "../context";

export default function TodoFrom() {
    const { dispatch } = useContext(Store);

    const [todo, setTodo] = useState("");

    function handleTodoChange(e) {
        setTodo(e.target.value);
    }

    function handleTodoAdd() {
        dispatch({ type: "ADD_TODO", payload: todo });
        setTodo("");
    }

    function handleSubmitForm(e) {
        if (e.keyCode === 13) handleTodoAdd();
    }
    
    return (
        <div className="row">
            <div className="col-md-12">
                <br/>
                <div className="input-group">
                    <input className="form-control" value={todo} autoFocus={true} placeholder="enter new todo" onKeyUp={handleSubmitForm} onChange={handleTodoChange}></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={handleTodoAdd}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}