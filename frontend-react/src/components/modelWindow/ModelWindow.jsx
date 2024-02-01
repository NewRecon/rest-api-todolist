import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ModelWindow.css"

export default function ModelWindow(props) {

   const [description, setDescription] = useState(props.descropton);

   const onInputChange = async(e) => {
      setDescription(e.target.value);
   }

  return (
    <div className='modelWindow'>
      <div className="modelForm">
      <Form.Label className='label'>Description</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={props.description}
        onChange={(e)=>onInputChange(e)}
        value={description}
      />
      <Button type='submit' variant="dark" onClick={
         ()=>{
            props.changeDescription(description);
            props.changeFlagEdit();
         }}>Change description</Button>
      </div>
    </div>
  )
}
