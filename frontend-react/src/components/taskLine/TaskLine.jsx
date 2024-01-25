import React from 'react'
import "./TaskLine.css"

import { faPencil, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from '@fortawesome/fontawesome-svg-core';


export default function TaskLine(props) {
   let task = props.task;
   const done = {
      textDecoration : "line-through"
   }
   const inprocess = {
      textDecoration : "none"
   }
   return (
      <div className="taskLine" >
         <div className="taskLine_el">{task.id}</div>
         <div className="taskLine_el description" style={task.status ? done : inprocess }>{task.description}</div>
         <div className="taskLine_el">{task.openTask}</div>
         <div className="taskLine_el">{task.closeTask}</div>
         <div className='buttonLine'>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={faPencil} /></button>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={faCheck} /></button>
            <button><FontAwesomeIcon className="taskLine_el_icon" icon={faTrash} /></button>
         </div>
      </div>
   )
}