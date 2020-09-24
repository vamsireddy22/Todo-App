import React, {useContext, useState} from "react"
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.Types"

const TodoForms = () =>{
    const [todostring, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e=>{
        e.preventDefault();
        if(todostring===""){
            return alert("Please enter a todo")
        }
        
        const todo = {
            todostring,
            id: v4()
        };

        dispatch({
            type: ADD_TODO,
            payload: todo
        });

        setTodoString("");
    };

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                value={todostring}
                onChange={e=>setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button color="warning">ADD</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForms;