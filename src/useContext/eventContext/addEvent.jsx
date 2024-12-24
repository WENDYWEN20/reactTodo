import React from 'react'
import {useContext, useState} from 'react'
import {EventContext} from './ContextEvent'
export default function AddEvent() {
    const [inputText, setInputText]=useState('')
    const {addEvent}=useContext(EventContext)
    const submitForm=(e)=>{
    e.preventDefault()
     console.log(inputText)
    addEvent(inputText)
    }

  return (
    <>
    <h1>Add an Event</h1>
    <form onSubmit={submitForm}>
    <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}}
    placeholder='Add a new Event'/>
<button type='submit'>Add</button>
</form></>
  )
}
