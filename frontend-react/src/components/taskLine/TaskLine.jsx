import React, { useState } from 'react'
import "./TaskLine.css"

import { faPencil, faCheck, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import ModelWindow from '../modelWindow/ModelWindow';


export default function TaskLine(props) {
   let task = props.task;

   const [flagEdit,setFlagEdit] = useState(false);

   const changeFlagEdit = () =>{
      setFlagEdit(!flagEdit);
   }

   const done = {
      textDecoration : "line-through"
   }
   const inprocess = {
      textDecoration : "none"
   }

   const delTasks = async() => {
      await axios.delete("http://localhost:8080/api/v0.1/task/"+task.id);
      props.loadTasks();
   }

   const changeStatus = async() => {
      task.status = !task.status;
      if (task.status){
         task.closeTask = null;
      }
      else task.closeTask = new Date().toJSON();
      await axios.put("http://localhost:8080/api/v0.1/task", task);
      props.loadTasks();
   }

   const changeDescription = async(description) => {
      task.description = description;
      await axios.put("http://localhost:8080/api/v0.1/task", task);
      props.loadTasks();
   }

   return (
      <div>
      <div className="taskLine" >
         <div className="taskLine_el">{props.id+1}</div>
         <div className="taskLine_el description" style={task.status ? inprocess : done }>{task.description}</div>
         <div className="taskLine_el">{new Date(task.openTask).toLocaleString()}</div>
         {task.status ?
         <div className="taskLine_el">----------------------</div> :
         <div className="taskLine_el">{new Date(task.closeTask).toLocaleString()}</div>}
         <div className='buttonLine'>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={faPencil} onClick={changeFlagEdit}/></button>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={task.status ? faCheck : faClose} onClick={changeStatus} /></button>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={faTrash} onClick={delTasks}/></button>
         </div>
      </div>

      {flagEdit ?
      (<div className="modelWindow">
      <ModelWindow description={task.description} changeDescription={changeDescription} changeFlagEdit={changeFlagEdit}/>
      </div>):null}
      
      </div>
   )
}