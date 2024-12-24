import React from 'react'
import {useReducer, useContext} from 'react'
import {EventContext} from './ContextEvent'
import eventsAPI from './eventAPI'

export default function useReducerEventList() {
  const {events, addEvent, deleteEvent, editEvent}=useContext()
 //reducer function
// const eventsReducer=(state, action)=>{
//     const {type, payload}=action //object destructure
//     switch(type){
//     case 'addEvent':
//         return [...state,payload ]
//     case 'deleteEvent':
//         return state.filter((event)=>event.id!==id)
//     case 'editEvent':
//         return state.map(()=>{})
//     }
// }

  return (
    <div>
      <h1>useContext useReduce</h1>
    </div>
  )
}
