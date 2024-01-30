import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import TaskLine from '../components/taskLine/TaskLine';
import "../models/Task.js"
import Task from '../models/Task.js';
import axios from 'axios';

export default function Home() {

   const [tasks, setTask] = useState([])
   
   useEffect(()=>{
      loadTasks();
   },[])

   const loadTasks = async() => {
      const result = await axios.get("http://localhost:8080/api/v0.1/tasks");
      setTask(result.data);
   }

  return (
   <div className='container'>
      <Header loadTasks = {loadTasks}/>
      {
         tasks.map((task, id) => (
            <TaskLine task = {task}/>
         ))
      }
   </div>
  )
}
