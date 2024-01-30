import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Header.css"
import axios from 'axios';
import Task from '../../models/Task';

export default function Header(props) {

  const [task,setTask] = useState(new Task());

  const createTask = async(e) => {
    e.preventDefault();
    task.openTask = new Date().toJSON();
    await axios.post("http://localhost:8080/api/v0.1/task", task);
    props.loadTasks();
  }

  const onInputChange = async(e) => {
    setTask({...task.description, description : e.target.value});
  }

  return (
    <div className='header'>
      <div className="input_form">
        <form onSubmit={(e)=>{createTask(e)}}>
        <Form.Control
            type="text"
            name="inputTask"
            value={task.description}
            onChange={(e)=>onInputChange(e)}
         />
         <Button type='submit' variant="dark">ADD TASK</Button>
        </form>
      </div>
    </div>
  )
}
