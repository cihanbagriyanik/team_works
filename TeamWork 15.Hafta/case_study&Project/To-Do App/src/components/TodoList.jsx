
import { v4 as uuidv4 } from 'uuid';

import ListItem from './List_Item/ListItem';

import { useEffect, useState } from "react";

import { Button, Form, InputGroup } from 'react-bootstrap';

import "bootstrap-icons/font/bootstrap-icons.css";



const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState(JSON.parse(localStorage.getItem("todo")) || [])

    const addTodo = (e) => {

        e.preventDefault()

        const todoItem = {
            // id: new Date().getTime(),
            id: uuidv4(),
            text: todo,
            isChecked: false
        }

        if (todo !== "") {
            setAllTodos([...allTodos].concat(todoItem).reverse())
            setTodo("")
        }

        console.log(allTodos);

    }


    const toggleChecked = (id) => {
        let updatedTodos = [...allTodos].map((todo) => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked
            }

            return todo
        })
        setAllTodos(updatedTodos)
    }


    const deleteTodo = (id) => {
        const filteredTodo = allTodos.filter((todo) => todo.id !== id)
        setAllTodos(filteredTodo)
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(allTodos))
    }, [allTodos])


    return (
        <div className='todo m-auto'>
            <InputGroup className="todo_wrapper mt-5 mb-4" onSubmit={addTodo}>
                <Form.Control
                    className='input text-white border-0 '
                    placeholder="Create new todo..."
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyDown={(e) => (e.key === "Enter") ? addTodo(e) : ""}
                />

                <Button className='but text-white ' variant="outline-secondary" id="button-addon2" onClick={addTodo} >
                    <i class="bi bi-arrow-bar-down" ></i>
                </Button>
            </InputGroup>

            <div className='todo_list'>
                {
                    allTodos.map((todo) => (
                        <ListItem key={todo.id} deleteTodo={() => deleteTodo(todo.id)} text={todo.text} isChecked={todo.isChecked} toggleChecked={() => toggleChecked(todo.id)} />
                    ))
                }

                {
                    allTodos.length === 0 && (
                        <p className='empty'>There are no Todo's</p>
                    )
                }
            </div>

        </div>
    )
}

export default TodoList
