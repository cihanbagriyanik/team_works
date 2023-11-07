import { v4 as uuidv4 } from 'uuid';

import ListItem from './List_Item/ListItem';

import { Button, Form, InputGroup } from 'react-bootstrap';

import "bootstrap-icons/font/bootstrap-icons.css";





const TodoList = () => {
    return (
        <div className='todo m-auto'>
            <InputGroup className="todo_wrapper mt-5 mb-4">
                <Form.Control
                    className='input text-white border-0 '
                    placeholder="Create new todo..."
                    type='text' />

                <Button className='but text-white ' variant="outline-secondary" id="button-addon2">
                    <i class="bi bi-arrow-bar-down" ></i>
                </Button>
            </InputGroup>

            <div className='todo_list'>
                <ListItem />
            </div>


        </div>
    )
}

export default TodoList
